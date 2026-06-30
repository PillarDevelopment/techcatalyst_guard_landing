import SignalOrb from "./SignalOrb";
import { BtnGhost, BtnPrimary, Kicker, Lead, Wrap } from "./ui";

const chips = [
  "Локальный контур контроля",
  "MCP + терминал + буфер обмена",
  "Политики без внешних вызовов",
];

const metrics = [
  { value: "3", label: "канала контроля" },
  { value: "4", label: "действия политики" },
  { value: "< 12 мс", label: "решение на машине" },
  { value: "100%", label: "события в вашем контуре" },
];

export default function Hero() {
  return (
    <section className="midnight-band overflow-hidden pt-24 pb-[88px] max-md:pt-14 max-md:pb-14">
      <Wrap>
        <div className="relative">
          <div className="mx-auto max-w-[860px] text-center">
            <Kicker className="justify-center text-arc">
              Локальная защита рабочей станции разработчика
            </Kicker>
            <h1 className="mx-auto max-w-[11ch] text-[clamp(40px,6vw,59px)] font-light leading-[1.02] tracking-[-0.021em] text-white">
              Не дайте агентской системе унести секреты с рабочей станции.
            </h1>
            <Lead className="mx-auto mt-5 max-w-[760px] text-[18px] text-halo">
              Techcatalyst Guard перехватывает терминал, ответы инструментов и
              буфер обмена на машине разработчика. Секреты и персональные
              данные скрываются до передачи во внешнюю модель, а журнал
              событий остаётся внутри вашего контура.
            </Lead>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <BtnPrimary href="#pilot">Запросить пилот</BtnPrimary>
              <BtnGhost
                href="#how"
                className="border-white/20 bg-transparent text-white hover:border-arc hover:text-arc"
              >
                Смотреть сценарий
              </BtnGhost>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-2.5">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-[4px] border border-white/16 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-halo"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-12 min-h-[560px] max-md:min-h-[420px]">
            <div className="control-grid absolute inset-0 opacity-30" />
            <SignalOrb />
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-card border border-white/12 bg-white/5 px-4 py-4 text-left text-white"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-halo">
                  показатель
                </div>
                <div className="mt-2 text-[30px] font-light tracking-[-0.03em]">
                  {metric.value}
                </div>
                <div className="mt-1 text-[14px] text-halo">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
