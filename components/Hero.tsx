import { Wrap, Kicker, Lead, BtnPrimary, BtnGhost } from "./ui";
import TerminalDemo from "./TerminalDemo";

const chips = ["On-prem", "Strict mode", "Zero cloud dependency"];

export default function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden border-b border-line bg-[radial-gradient(900px_520px_at_83%_-12%,rgba(24,55,218,.12),transparent_62%)]"
    >
      <Wrap className="grid items-center gap-12 py-[78px] lg:grid-cols-[1.04fr_.96fr] lg:py-[104px]">
        <div>
          <Kicker>On-prem workstation security</Kicker>
          <h1 className="mt-5 text-[clamp(38px,5.1vw,62px)] font-bold leading-[1.06] tracking-[-.035em] text-[#222]">
            Учётные данные остаются на рабочей станции.{" "}
            <em className="not-italic text-blue">Даже когда с ней работает AI.</em>
          </h1>
          <Lead>
            TechCatalyst Guard перехватывает команды терминала, ответы
            MCP-инструментов и буфер обмена — и маскирует учётные данные и PII до того,
            как их увидит AI-агент. Политики централизованы и защищены от
            отключения. Всё работает on-prem.
          </Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BtnPrimary href="#pilot">Запросить пилот</BtnPrimary>
            <BtnGhost href="#pilot">Получить архитектуру решения</BtnGhost>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-muted before:mr-2 before:text-[9px] before:text-green before:content-['●']"
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
