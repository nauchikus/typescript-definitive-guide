export function copyToBuffer(text: string): void {
  const input: HTMLInputElement = document.createElement(
    'input'
  ) as HTMLInputElement;
  const focus: HTMLElement = document.activeElement as HTMLElement;

  input.value = text;

  document.body.appendChild(input);

  input.select();

  document.execCommand('copy');
  document.body.removeChild(input);

  focus.focus();
}