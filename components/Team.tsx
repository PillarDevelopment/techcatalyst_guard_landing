import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Продукт ведёт основатель",
    text: "Архитектура, модель угроз, пилоты и продуктовые решения не делегированы в сторону. За решение отвечает команда, которая его проектирует и внедряет.",
  },
  {
    title: "Безопасность плюс инструменты разработки",
    text: "Фокус не на абстрактной DLP-риторике, а на реальном поведении агентских систем, терминала, MCP-инструментов и рабочих станций разработчиков.",
  },
  {
    title: "Пилоты в контуре заказчика",
    text: "Мы не продаём «безопасность по слайдам». Ценность доказывается в реальном контуре, на реальных репозиториях и с измеримыми правилами приёмки.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal>
          <Kicker>Команда</Kicker>
          <H2>Команда, которая строит защиту ИИ вокруг реального рабочего процесса разработчика</H2>
          <Lead>
            Techcatalyst Guard развивается как инженерный продукт безопасности: от
            модели угроз и локального контура исполнения до пилотов в инфраструктуре
            заказчика.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-[1.08fr_.92fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-panel border border-line bg-white p-8 shadow-panel">
              <div className="mb-3 inline-flex rounded-full bg-blue-soft px-3 py-1 text-[12px] font-semibold uppercase tracking-[.1em] text-blue">
                Основатель
              </div>
              <h3 className="text-[28px] font-semibold tracking-[-.02em] text-[#222]">
                Иван Борисов
              </h3>
              <p className="mt-4 max-w-[720px] text-[16px] leading-8 text-muted">
                Основатель Techcatalyst. Ведёт продукт, архитектуру и работу с
                пилотами на стыке инфраструктуры ИИ, инструментов разработки и
                механизмов защиты для рабочих станций разработчиков.
              </p>
              <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-muted">
                Если вам важно поговорить не с «пресейлом по презентации», а с
                человеком, который реально проектирует исполняющий контур, модель
                политик и границы гарантий, этот диалог идёт напрямую с
                основателем.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/borisov-ivan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-blue px-6 py-3 text-[14.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
                >
                  LinkedIn
                </a>
                <a
                  href="#pilot"
                  className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3 text-[14.5px] font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
                >
                  Обсудить пилот
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {principles.map((item) => (
              <Reveal key={item.title}>
                <Card className="h-full">
                  <h3 className="mb-2 text-lg font-semibold text-[#222]">{item.title}</h3>
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
