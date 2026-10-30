"""Generate OpenCode V2 themes from Rex's bundled color themes.

Usage: python3 scripts/rex-opencode-themes.py [rex-themes.json]
Writes configs/opencode/themes/rex-*.json; `metronome push` installs them.
"""

import json
import re
import sys
from pathlib import Path

OUT_DIR = Path(__file__).resolve().parent.parent / "configs" / "opencode" / "themes"
REX_THEMES = Path(
    "/Applications/Rex Beta.app/Contents/Resources/"
    "SuperUI_SuperDesignTokens.bundle/Contents/Resources/themes.json"
)
STEPS = ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
TOWARD_BG = [0.15, 0.30, 0.45, 0.60, 0.72, 0.84, 0.92]
MIN_CONTRAST = 4.5
PAIRS = {"merino": ("merino-light", "merino-dark"), "silver-point": ("silver-point-light", "silver-point-dark")}

RGB = tuple[float, float, float]


def hex_to_rgb(value: str) -> RGB:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) / 255 for i in (0, 2, 4))


def rgb_to_hex(rgb: RGB) -> str:
    return "#" + "".join(f"{round(min(max(c, 0), 1) * 255):02x}" for c in rgb)


def mix(a: RGB, b: RGB, t: float) -> RGB:
    return tuple(x + (y - x) * t for x, y in zip(a, b))


def to_linear(c: float) -> float:
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def from_linear(c: float) -> float:
    return 12.92 * c if c <= 0.0031308 else 1.055 * c ** (1 / 2.4) - 0.055


def to_oklab(rgb: RGB) -> RGB:
    r, g, b = (to_linear(c) for c in rgb)
    l = (0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b) ** (1 / 3)
    m = (0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b) ** (1 / 3)
    s = (0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b) ** (1 / 3)
    return (
        0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
        1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
        0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s,
    )


def from_oklab(lab: RGB) -> RGB:
    L, a, b = lab
    l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
    m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
    s = (L - 0.0894841775 * a - 1.2914855480 * b) ** 3
    return tuple(
        from_linear(c)
        for c in (
            4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
            -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
            -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s,
        )
    )


def lab_mix(a: RGB, b: RGB, t: float) -> RGB:
    return from_oklab(mix(to_oklab(a), to_oklab(b), t))


def shift_lightness(rgb: RGB, delta: float) -> RGB:
    L, a, b = to_oklab(rgb)
    for scale in (1.0, 0.9, 0.8, 0.7, 0.6, 0.5):
        out = from_oklab((min(max(L + delta, 0), 1), a * scale, b * scale))
        if all(-0.001 <= c <= 1.001 for c in out):
            return out
    return out


def lightness(rgb: RGB) -> float:
    return to_oklab(rgb)[0]


def p3_to_srgb(red: float, green: float, blue: float) -> RGB:
    r, g, b = (to_linear(c) for c in (red, green, blue))
    return tuple(
        from_linear(min(max(c, 0), 1))
        for c in (
            1.2249401 * r - 0.2249404 * g,
            -0.0420569 * r + 1.0420571 * g,
            -0.0196376 * r - 0.0786361 * g + 1.0982735 * b,
        )
    )


def css_color(value: str, bg: RGB) -> RGB:
    """Parse Rex CSS values like '6 16 26' or 'rgb(184 205 217 / 0.048)', flattening alpha over bg."""
    nums = [float(n) for n in re.findall(r"[\d.]+", value)]
    rgb = tuple(n / 255 for n in nums[:3])
    return mix(bg, rgb, nums[3]) if len(nums) == 4 else rgb


def css_alpha(value: str) -> float:
    return float(re.findall(r"[\d.]+", value)[3])


def luminance(rgb: RGB) -> float:
    r, g, b = (to_linear(min(max(c, 0), 1)) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a: RGB, b: RGB) -> float:
    la, lb = sorted((luminance(a), luminance(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def legible(color: RGB, surfaces: list[RGB], dark: bool, minimum: float = MIN_CONTRAST) -> RGB:
    """Nudge OKLab lightness away from the surfaces until the color reaches the minimum contrast."""
    out = color
    for _ in range(60):
        if min(contrast(out, s) for s in surfaces) >= minimum:
            return out
        out = shift_lightness(out, 0.01 if dark else -0.01)
    return out


def scale(base: RGB, bright: RGB, bg: RGB, dark: bool) -> dict[str, str]:
    """Nine steps: 100 stronger than base, 200 base, 300-900 fading into the background."""
    stronger = (lightness(bright) > lightness(base)) if dark else (lightness(bright) < lightness(base))
    top = bright if stronger else shift_lightness(base, 0.08 if dark else -0.08)
    colors = [top, base] + [lab_mix(base, bg, t) for t in TOWARD_BG]
    return dict(zip(STEPS, map(rgb_to_hex, colors)))


def build_mode(theme: dict) -> tuple[dict, dict]:
    src, css = theme["source"], theme["cssVariables"]
    dark = theme["appearance"] == "dark"
    bg = hex_to_rgb(src["background"])
    ansi = [hex_to_rgb(c) for c in src["ansi"]]
    c = lambda name: css_color(css[f"--super-{name}"], bg)
    text, text2, text3 = c("text"), c("text-secondary"), c("text-tertiary")
    hover, selected = css_alpha(css["--super-hover"]), css_alpha(css["--super-selected"])
    raised_max, raised_high, raised_base = (mix(bg, text, alpha) for alpha in (3 * selected, selected, hover))
    white, black = (1.0, 1.0, 1.0), (0.0, 0.0, 0.0)
    extreme, beyond_bg = (white, black) if dark else (black, white)
    fix = lambda color: legible(color, [bg, raised_base], dark)
    orange = fix(p3_to_srgb(*(theme["palette"][208][k] for k in ("red", "green", "blue"))))
    accent = fix(c("accent-solid"))
    gray = [lab_mix(text, extreme, 0.35), text, text2, text3, raised_max, raised_high, raised_base, bg, mix(bg, beyond_bg, 0.4)]

    hues = {
        "gray": dict(zip(STEPS, map(rgb_to_hex, gray))),
        "red": scale(fix(ansi[1]), ansi[9], bg, dark),
        "orange": scale(orange, shift_lightness(orange, 0.08 if dark else -0.08), bg, dark),
        "yellow": scale(fix(ansi[3]), ansi[11], bg, dark),
        "green": scale(fix(ansi[2]), ansi[10], bg, dark),
        "cyan": scale(fix(ansi[6]), ansi[14], bg, dark),
        "blue": scale(fix(ansi[4]), ansi[12], bg, dark),
        "purple": scale(fix(ansi[5]), ansi[13], bg, dark),
        "accent": scale(accent, lab_mix(accent, extreme, 0.25), bg, dark),
        "interactive": "$hue.accent",
        "neutral": "$hue.gray",
    }

    accent_lab = to_oklab(accent)
    distinct = [
        name
        for name in ("purple", "green", "orange", "blue", "cyan", "red", "yellow")
        if sum((x - y) ** 2 for x, y in zip(to_oklab(hex_to_rgb(hues[name]["200"])), accent_lab)) ** 0.5 > 0.08
    ]
    categorical = ["accent", *distinct[:4]]

    h = lambda name, step="200": f"$hue.{name}.{step}"
    on_accent = rgb_to_hex(c("accent-on-solid"))
    danger, warning, success, info = (rgb_to_hex(fix(c(n))) for n in ("danger", "warning", "success", "info"))
    tint = lambda color, t: rgb_to_hex(mix(bg, color, t))

    tokens = {
        "categorical": categorical,
        "text": {
            "base": h("neutral"),
            "muted": h("neutral", "300"),
            "action": {
                "primary": {"base": "$text.base", "$disabled": h("neutral", "400"), "$focused": on_accent, "$selected": h("interactive")},
                "secondary": {"base": "$text.muted", "$hovered": "$text.base"},
                "destructive": {"base": rgb_to_hex(c("danger-on-solid")), "$disabled": h("neutral", "400")},
            },
            "formfield": {
                "base": h("neutral"),
                "$hovered": h("interactive"),
                "$focused": h("interactive"),
                "$pressed": h("interactive"),
                "$disabled": h("neutral", "400"),
                "$selected": h("interactive"),
            },
            "feedback": {
                "error": {"base": danger},
                "warning": {"base": warning},
                "success": {"base": success},
                "info": {"base": info},
            },
        },
        "background": {
            "base": h("neutral", "800"),
            "raised": {"base": h("neutral", "700"), "high": h("neutral", "600"), "max": h("neutral", "500")},
            "action": {
                "primary": {"base": "transparent", "$hovered": h("neutral", "700"), "$focused": h("interactive"), "$selected": "transparent"},
                "secondary": {"base": "transparent"},
                "destructive": {"base": danger},
            },
            "formfield": {"base": "$background.base"},
            "feedback": {k: {"base": "$background.base"} for k in ("error", "warning", "success", "info")},
        },
        "border": {"base": rgb_to_hex(c("border-strong"))},
        "scrollbar": {"base": rgb_to_hex(c("scrollbar-hover"))},
        "diff": {
            "text": {"added": success, "removed": danger, "context": h("neutral", "300"), "hunkHeader": h("neutral", "300")},
            "background": {"added": tint(c("success"), 0.16), "removed": tint(c("danger"), 0.16), "context": h("neutral", "700")},
            "highlight": {"added": h("green", "100"), "removed": h("red", "100")},
            "lineNumber": {
                "text": h("neutral", "400"),
                "background": {"added": tint(c("success"), 0.10), "removed": tint(c("danger"), 0.10)},
            },
        },
        "syntax": {
            "comment": h("neutral", "300"),
            "keyword": h("purple"),
            "function": h("blue"),
            "variable": h("red"),
            "string": h("green"),
            "number": h("orange"),
            "type": h("yellow"),
            "operator": h("cyan"),
            "punctuation": h("neutral"),
        },
        "markdown": {
            "text": h("neutral"),
            "heading": h("accent"),
            "link": h("interactive"),
            "linkText": h("cyan"),
            "code": h("green"),
            "blockQuote": h("yellow"),
            "emphasis": h("yellow"),
            "strong": h("orange"),
            "horizontalRule": h("neutral", "400"),
            "listItem": h("interactive"),
            "listEnumeration": h("cyan"),
            "image": h("interactive"),
            "imageText": h("cyan"),
            "codeBlock": h("neutral"),
        },
        "@dialog": {"background": {"base": "$background.raised.base", "action": {"primary": {"$hovered": "$background.raised.high"}}}},
    }
    return hues, tokens


def write(path: Path, modes: dict[str, dict]) -> None:
    """Two-mode themes repeat the per-mode tokens inside each mode, since their hex values differ."""
    built = {mode: build_mode(theme) for mode, theme in modes.items()}
    first = next(iter(built.values()))
    out: dict = {"$schema": "https://opencode.ai/theme.json", "base": first[1]}
    for mode, (hues, tokens) in built.items():
        section: dict = {"hue": hues}
        if len(built) > 1:
            section.update({k: v for k, v in tokens.items() if k != "@dialog"})
        out[mode] = section
    path.write_text(json.dumps(out, indent=2) + "\n")


def main() -> None:
    source = Path(sys.argv[1]).expanduser() if len(sys.argv) > 1 else REX_THEMES
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    themes = {t["id"]: t for t in json.loads(source.read_text())}
    paired = {tid for pair in PAIRS.values() for tid in pair}
    for name, (light, dark) in PAIRS.items():
        write(OUT_DIR / f"rex-{name}.json", {"light": themes[light], "dark": themes[dark]})
    for tid, theme in themes.items():
        if tid not in paired:
            write(OUT_DIR / f"rex-{tid}.json", {theme["appearance"]: theme})
    print(f"{len(themes) - len(paired) + len(PAIRS)} themes -> {OUT_DIR}")


if __name__ == "__main__":
    main()
