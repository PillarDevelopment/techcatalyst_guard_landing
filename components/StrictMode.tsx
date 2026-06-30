import FakeDashboard from "./FakeDashboard";
import Reveal from "./Reveal";
import { BtnPrimary, H2, Kicker, Wrap } from "./ui";

const points = [
  "Подписанные policy snapshots и локальная проверка целостности",
  "Tamper detection с переходом в strict fallback",
  "Без локального opt-out для критичных групп",
  "В события попадают только факты и категории данных",
];

export default function StrictMode() {
  return (
    <section id="strict" className="midnight-band py-[92px] max-sm:py-16">
      <Wrap className="grid grid-cols-[0.84fr_1.16fr] items-center gap-10 max-lg:grid-cols-1">
        <Reveal>
          <Kicker className="text-arc">Trust model</Kicker>
          <H2 className="text-white">Strict mode удерживает контроль даже при попытке обхода.</H2>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-[16px] leading-[1.57] text-halo">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-arc" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[540px] text-[16px] leading-[1.57] text-halo">
            Граница гарантий фиксируется честно: strict mode закрывает штатный
            обход и случайную утечку. Для root-level adversary мы публикуем
            threat model и предлагаем проверку в пилоте.
          </p>
          <div className="mt-7">
            <BtnPrimary href="#pilot">Проверить в своём контуре</BtnPrimary>
          </div>
        </Reveal>
        <Reveal>
          <FakeDashboard variant="policy" className="border-white/12" />
        </Reveal>
      </Wrap>
    </section>
  );
}
