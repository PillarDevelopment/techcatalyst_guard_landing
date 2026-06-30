import FakeDashboard from "./FakeDashboard";
import Reveal from "./Reveal";
import { Code, H2, Kicker, Lead, Wrap } from "./ui";

const steps = [
  {
    id: "01",
    title: "Агент перехватывает",
    text: (
      <>
        Локальный агент встраивается в <Code>zsh</Code>, <Code>bash</Code> и в
        proxy для MCP. Потоки <Code>stdout/stderr</Code> и tool-response
        захватываются до передачи в агентский runtime.
      </>
    ),
  },
  {
    id: "02",
    title: "Политики решают",
    text: (
      <>
        Rule-based движок проверяет команду, канал и контекст пользователя.
        Доступные действия: <Code>allow</Code>, <Code>warn</Code>,{" "}
        <Code>mask</Code>, <Code>block</Code>.
      </>
    ),
  },
  {
    id: "03",
    title: "События уходят в контур",
    text: "Контрольная панель получает только факты и метаданные срабатываний. Сырые секреты не уходят в телеметрию ни при каких режимах.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-paper py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal className="grid grid-cols-[0.82fr_1.18fr] gap-10 max-lg:grid-cols-1">
          <div className="max-w-[480px]">
            <Kicker>How it works</Kicker>
            <H2>Control plane видит продукт, а workstation видит enforcement.</H2>
            <Lead>
              У продукта две плоскости. На машине разработчика работает локальный
              контроль. Для security и platform-команды это выглядит как чистая
              on-prem панель со статусами, политиками и событийной аналитикой.
            </Lead>
          </div>
          <div className="pt-2">
            <FakeDashboard variant="overview" />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {steps.map((step) => (
            <Reveal key={step.id}>
              <div className="rounded-card border border-silver bg-paper p-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-blue">
                  {step.id}
                </div>
                <h3 className="mt-3 text-[27px] font-light leading-[1.2] tracking-[-0.014em] text-carbon">
                  {step.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.57] text-slate">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
