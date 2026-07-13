import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Продукт под руководством основателя",
    text: "Архитектуру, модель угроз, пробные внедрения и продуктовые решения ведёт команда, которая проектирует и внедряет систему.",
  },
  {
    title: "Безопасность инструментов разработки",
    text: "Фокус направлен на реальное поведение ИИ-агентов, терминала, инструментов MCP и рабочих станций разработчиков.",
  },
  {
    title: "Пробное внедрение в контуре заказчика",
    text: "Ценность подтверждается в реальном контуре, на рабочих репозиториях и по измеримым правилам приёмки.",
  },
];

export default function Team() {
  return (
    <section id="team" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Команда</Kicker>
          <H2>Команда строит безопасность ИИ вокруг реального процесса разработки</H2>
          <Lead>
            TechCatalyst Guard развивается как инженерный продукт безопасности: от
            модели угроз и локального применения политик до пробных внедрений в инфраструктуре
            заказчика.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-[1.08fr_.92fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-panel border border-line bg-white p-8 shadow-panel">
              <div className="mb-3 inline-flex rounded-[10px] bg-blue-soft px-3 py-1 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                Основатель
              </div>
              <h3 className="text-[28px] font-semibold tracking-[-.02em] text-[#0d1326]">
                Иван Борисов
              </h3>
              <p className="mt-4 max-w-[720px] text-[16px] leading-8 text-muted">
                Основатель TechCatalyst. Ведёт продукт, архитектуру и работу с
                пробными внедрениями на стыке ИИ-инфраструктуры, инструментов разработки и
                механизмов безопасности рабочих станций.
              </p>
              <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-muted">
                Диалог о пробном внедрении идёт напрямую с основателем, который проектирует
                слой применения политик, модель управления и границы гарантий.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/borisov-ivan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-[10px] bg-blue px-6 py-3 text-[14.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
                >
                  Профиль основателя
                </a>
                <a
                  href="#pilot"
                  className="inline-flex items-center rounded-[10px] border border-line bg-white px-6 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
                >
                  Обсудить пробное внедрение
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {principles.map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full">
                  <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{item.title}</h3>
                  <p className="text-[15px] text-muted">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
