import { Wrap, Kicker, Lead, BtnPrimary, BtnGhost } from "./ui";
import TerminalDemo from "./TerminalDemo";

const chips = ["В контуре заказчика", "Строгий режим", "Локальная обработка"];

export default function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden border-b border-line bg-[radial-gradient(900px_520px_at_83%_-12%,rgba(24,55,218,.12),transparent_62%)]"
    >
      <Wrap className="grid items-center gap-12 py-[78px] lg:grid-cols-[1.04fr_.96fr] lg:py-[104px]">
        <div>
          <Kicker>Безопасность рабочей станции</Kicker>
          <h1 className="mt-5 text-[clamp(38px,5.1vw,62px)] font-bold leading-[1.06] tracking-[-.035em] text-[#222]">
            Учётные данные остаются на рабочей станции.{" "}
            <em className="not-italic text-blue">Под защитой при работе с ИИ.</em>
          </h1>
          <Lead>
            TechCatalyst Guard перехватывает команды терминала, ответы
            инструментов MCP и буфер обмена — и маскирует учётные и персональные
            данные до передачи ИИ-агенту. Централизованные политики сохраняют
            целостность, а обработка выполняется в контуре заказчика.
          </Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BtnPrimary href="#pilot">Запросить пробное внедрение</BtnPrimary>
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
