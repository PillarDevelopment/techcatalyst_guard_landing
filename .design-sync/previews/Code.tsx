import { Code } from "sai-landing";

export const Default = () => (
  <p className="max-w-[520px] text-[15px] leading-[1.7] text-ink">
    Локальный агент встраивается в командные оболочки <Code>zsh</Code>,{" "}
    <Code>bash</Code> и <Code>PowerShell</Code> — и перехватывает команды и
    логины <Code>stdout/stderr</Code> через защищённую PTY-сессию.
  </p>
);
