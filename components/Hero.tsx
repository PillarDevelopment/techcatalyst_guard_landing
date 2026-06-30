import SignalOrb from "./SignalOrb";
import { BtnGhost, BtnPrimary, Kicker, Lead, Wrap } from "./ui";

const chips = [
  "On-prem enforcement",
  "MCP + terminal + clipboard",
  "Политики без phone-home",
];

export default function Hero() {
  return (
    <section className="midnight-band overflow-hidden pt-24 pb-[88px] max-md:pt-14 max-md:pb-14">
      <Wrap className="grid grid-cols-[0.86fr_1.14fr] items-center gap-10 max-md:grid-cols-1">
        <div className="relative z-10 max-w-[520px]">
          <Kicker className="text-arc">Developer workstation defense</Kicker>
          <h1 className="max-w-[11ch] text-[clamp(40px,6vw,59px)] font-light leading-[1.08] tracking-[-0.019em] text-white">
            Управляйте тем, что AI-агент видит на рабочей станции.
          </h1>
          <Lead className="mt-5 text-[18px] text-halo">
            Techcatalyst Guard перехватывает terminal, MCP и clipboard на машине
            разработчика. Секреты и PII маскируются до того, как попадут во
            внешнюю модель, а события остаются под on-prem контролем.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <BtnPrimary href="#pilot">Запросить пилот</BtnPrimary>
            <BtnGhost
              href="#how"
              className="border-white/20 bg-transparent text-white hover:border-arc hover:text-arc"
            >
              Смотреть схему
            </BtnGhost>
          </div>
          <div className="mt-7 flex flex-wrap gap-2.5">
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

        <div className="relative min-h-[560px] max-md:min-h-[420px]">
          <div className="control-grid absolute inset-0 opacity-30" />
          <SignalOrb />
        </div>
      </Wrap>
    </section>
  );
}
