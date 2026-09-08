import { afterEach, describe, expect, test } from 'bun:test';
import { createTerminalUI, type TerminalStream } from '../terminal-ui';

const originalNoColor = process.env.NO_COLOR;

afterEach(() => {
  if (originalNoColor === undefined) delete process.env.NO_COLOR;
  else process.env.NO_COLOR = originalNoColor;
});

function stream(isTTY: boolean): TerminalStream & { output: string } {
  return {
    isTTY,
    output: '',
    write(chunk: string) {
      this.output += chunk;
      return true;
    },
  };
}

describe('terminal UI', () => {
  test('renders a compact colored operation in a TTY', () => {
    delete process.env.NO_COLOR;
    const output = stream(true);
    const ui = createTerminalUI(output);

    ui.start('OpenCode V2 · runtime upgrade');
    ui.report('Verify plugins...');
    ui.success('OpenCode V2 ready');
    ui.close();

    expect(output.output).toContain('OpenCode V2 · runtime upgrade');
    expect(output.output).toContain('✓');
    expect(output.output).toContain('OpenCode V2 ready');
    expect(output.output).toContain('\u001b[');
  });

  test('keeps piped output plain and line-oriented', () => {
    const output = stream(false);
    const ui = createTerminalUI(output);

    ui.start('OpenCode V1 · profile refresh');
    ui.report('Render profile done (12ms)');
    ui.failure('interrupted');
    ui.close();

    expect(output.output).toBe('◆ OpenCode V1 · profile refresh\n  ✓ Render profile · 12ms\n  ✗ interrupted\n');
    expect(output.output).not.toContain('\u001b[');
  });

  test('honors NO_COLOR in a TTY', () => {
    process.env.NO_COLOR = '1';
    const output = stream(true);
    const ui = createTerminalUI(output);

    ui.start('OpenCode V2 · profile refresh');
    ui.success('done');
    ui.close();

    expect(output.output).not.toContain('\u001b[');
  });
});
