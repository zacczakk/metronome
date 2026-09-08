export interface TerminalStream {
  isTTY?: boolean;
  write(chunk: string): unknown;
}

export interface TerminalUI {
  start(title: string): void;
  report(message: string): void;
  success(message: string): void;
  failure(message: string): void;
  close(): void;
}

const frames = ['⠋', '⠙', '⠹', '⠸'];

function paint(value: string, code: number, enabled: boolean): string {
  return enabled ? `\u001b[${code}m${value}\u001b[0m` : value;
}

function finishedMessage(message: string, state: 'done' | 'failed'): string {
  return message.replace(new RegExp(` ${state} \\((.+)\\)$`), ' · $1');
}

export function createTerminalUI(stream: TerminalStream = process.stderr): TerminalUI {
  const live = stream.isTTY === true && process.env.NO_COLOR === undefined;
  let active = false;
  let activeMessage = '';
  let frame = 0;
  let spinner: ReturnType<typeof setInterval> | undefined;

  const write = (message: string) => { stream.write(message); };
  const clearActive = () => {
    if (!active) return;
    if (live) write('\r\u001b[2K');
    active = false;
    activeMessage = '';
  };
  const renderActive = () => {
    if (!active || !live) return;
    write(`\r\u001b[2K${paint(frames[frame % frames.length]!, 33, true)} ${activeMessage}`);
    frame += 1;
  };
  const stopSpinner = () => {
    if (spinner) clearInterval(spinner);
    spinner = undefined;
  };

  return {
    start(title) {
      write(`${paint('◆', 36, live)} ${paint(title, 1, live)}\n`);
    },
    report(message) {
      const isActive = message.endsWith('...') || message.includes(' still running (') || message.includes(' waiting (');
      if (isActive) {
        if (!live) {
          write(`  ${message}\n`);
          return;
        }
        active = true;
        activeMessage = message.replace(/\.\.\.$/, '');
        if (!spinner) spinner = setInterval(renderActive, 120);
        renderActive();
        return;
      }

      clearActive();
      stopSpinner();
      if (message.includes(' done (')) {
        const detail = finishedMessage(message, 'done');
        write(`${live ? paint('✓', 32, true) : '  ✓'} ${detail}\n`);
      } else if (message.includes(' failed (')) {
        const detail = finishedMessage(message, 'failed');
        write(`${live ? paint('✗', 31, true) : '  ✗'} ${detail}\n`);
      } else {
        write(`${live ? paint('·', 2, true) : '  ·'} ${message}\n`);
      }
    },
    success(message) {
      clearActive();
      stopSpinner();
      write(`${live ? paint('✓', 32, true) : '  ✓'} ${message}\n`);
    },
    failure(message) {
      clearActive();
      stopSpinner();
      write(`${live ? paint('✗', 31, true) : '  ✗'} ${message}\n`);
    },
    close() {
      clearActive();
      stopSpinner();
    },
  };
}
