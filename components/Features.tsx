import FakeDashboard from "./FakeDashboard";
import Reveal from "./Reveal";
import { H2, Kicker, Lead, Wrap } from "./ui";

const features = [
  {
    title: "Единый обзор состояния",
    text: "Парк рабочих станций, события, распределение по каналам и история срабатываний собираются в один продуктовый экран.",
    variant: "overview" as const,
  },
  {
    title: "Редактор и выпуск политик",
    text: "Правила проходят путь от черновика до публикации. Можно управлять действиями, каналами и областями применения без ручной раскатки по машинам.",
    variant: "policy" as const,
  },
  {
    title: "Контроль парка и действий оператора",
    text: "Операционная команда видит, где нужен строгий режим, какие станции выпали из контура и какие шаги нужно сделать прямо сейчас.",
    variant: "fleet" as const,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-paper pb-[92px] max-sm:pb-16">
      <div className="section-transition" />
      <Wrap>
        <Reveal className="mx-auto max-w-[760px] text-center">
          <Kicker>Продуктовые экраны</Kicker>
          <H2>
            Светлая продуктовая поверхность показывает то, что реально
            происходит в контуре.
          </H2>
          <Lead className="mx-auto">
            Ниже временные макеты экранов в логике референса: обзор, выпуск
            политик и управление парком рабочих станций. Позже их можно
            заменить на реальные снимки продукта без переделки структуры.
          </Lead>
        </Reveal>

        <div className="mt-12 space-y-10">
          {features.map((feature, index) => (
            <Reveal key={feature.title}>
              <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-blue">
                    экран {index + 1}
                  </div>
                  <h3 className="mt-3 max-w-[12ch] text-[35px] font-light leading-[1.12] tracking-[-0.014em] text-carbon">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-[520px] text-[16px] leading-[1.57] text-slate">
                    {feature.text}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <FakeDashboard variant={feature.variant} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
