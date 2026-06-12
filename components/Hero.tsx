import { Wrap, Kicker, Lead, BtnPrimary, BtnGhost } from "./ui";
import TerminalDemo from "./TerminalDemo";

const chips = ["On-prem", "Strict mode", "Zero cloud dependency"];

export default function Hero() {
  return (
    <section
      className="overflow-hidden py-24 pb-[84px] max-md:py-12 max-md:pb-11"
      style={{
        background:
          "radial-gradient(900px 460px at 82% -12%, rgba(24,55,218,.07), transparent 60%), #fff",
      }}
    >
      <Wrap className="grid grid-cols-[1.05fr_1fr] items-center gap-14 max-md:grid-cols-1">
        <div>
          <Kicker>On-prem workstation security</Kicker>
          <h1 className="mb-5 text-[clamp(32px,4.3vw,52px)] font-bold leading-[1.18] tracking-[-.015em] text-[#222]">
            Секреты остаются на рабочей станции.{" "}
            <em className="not-italic text-blue">Даже когда с ней работает AI.</em>
          </h1>
          <Lead>
            Techcatalyst Guard перехватывает команды терминала, ответы
            MCP-инструментов и буфер обмена — и маскирует секреты и PII до того,
            как их увидит AI-агент. Политики централизованы и защищены от
            отключения. Всё работает on-prem.
          </Lead>
          <div className="mb-7 mt-8 flex flex-wrap gap-3.5">
            <BtnPrimary href="#pilot">Запросить пилот</BtnPrimary>
            <BtnGhost href="#pilot">Получить архитектуру решения</BtnGhost>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-soft px-3.5 py-1.5 text-[13.5px] font-medium text-muted before:mr-[7px] before:align-[1px] before:text-[9px] before:text-green before:content-['●']"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <TerminalDemo />
      </Wrap>
    </section>
  );
}
