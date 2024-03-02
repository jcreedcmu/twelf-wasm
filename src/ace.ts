type AceRenderer = {
  setOption(option: any, value: any): void;
};

type AceEditor = {
  getValue(): string;
  setValue(text: string, index?: number): void;
  renderer: AceRenderer;
  focus(): void;
};

declare const editor: AceEditor;
