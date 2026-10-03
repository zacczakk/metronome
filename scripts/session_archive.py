"""Atomic archive writes and exclusive exporter ownership."""

from __future__ import annotations

import fcntl
import json
import os
import re
import tempfile
from contextlib import contextmanager
from pathlib import Path
from typing import Iterator


def validate_jsonl(path: Path) -> None:
    with path.open() as file:
        for number, line in enumerate(file, 1):
            if not line.strip():
                continue
            try:
                value = json.loads(line)
                if not isinstance(value, dict):
                    raise ValueError("record must be an object")
            except (json.JSONDecodeError, ValueError) as error:
                raise ValueError(f"malformed source record at {path}:{number}") from error


def archive_path(folder: Path, date: str, title: str, session_id: str) -> Path:
    slug = re.sub(r"[\W_]+", "-", title.lower()).strip("-")[:60].rstrip("-")
    identity = re.sub(r"[^\w-]", "-", session_id)
    return folder / f"{date}-{slug or 'session'}-{identity}.md"


def atomic_write(path: Path, text: str) -> None:
    """Never open an existing iCloud placeholder for truncation."""
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary: str | None = None
    try:
        with tempfile.NamedTemporaryFile(
            mode="w", encoding="utf-8", dir=path.parent, prefix=".export-", delete=False
        ) as file:
            temporary = file.name
            file.write(text)
            file.flush()
            os.fsync(file.fileno())
        os.replace(temporary, path)
        temporary = None
    finally:
        if temporary is not None:
            Path(temporary).unlink(missing_ok=True)


@contextmanager
def export_lock(directory: Path) -> Iterator[None]:
    directory.mkdir(parents=True, exist_ok=True)
    with (directory / ".export.lock").open("a") as file:
        try:
            fcntl.flock(file, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError as error:
            raise RuntimeError("session export already running") from error
        yield
