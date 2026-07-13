import { Wrap, Kicker, H2, Lead, Code } from "./ui";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Агент перехватывает",
    text: (
      <>
        Локальный агент встраивается в <Code>zsh</Code>, <Code>bash</Code>,{" "}
        <Code>PowerShell</Code> и перехватывает команды и потоки{" "}
        <Code>stdout/stderr</Code> через защищённую PTY-сессию — а также
        MCP-трафик и буфер обмена.
      </>
    ),
  },
  {
    title: "Политики решают",
    text: (
      <>
        Локальный rule-based движок проверяет команду и вывод по подписанным
        корпоративным политикам и применяет решение: <Code>allow</Code>,{" "}
        <Code>warn</Code>, <Code>mask</Code> или <Code>block</Code> — в реальном
        времени.
      </>
    ),
  },
  {
    title: "События — в контур",
    text: "Каждое срабатывание фиксируется в локальном аудит-логе и батчами отправляется в on-prem панель управления. Сырые секреты при этом никогда не покидают машину.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Как работает</Kicker>
          <H2>Перехват — локальная проверка — аудит</H2>
          <Lead>
            Вся обработка происходит на рабочей станции, без круговых запросов к
            серверу. Контур управления — у вас on-prem.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {steps.map((s, i) => (
            <Reveal key={s.title}>
              <div className="h-full rounded-card border border-line bg-white p-7">
                <span className="mb-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-blue text-sm font-bold text-white">
                  0{i + 1}
                </span>
                <h3 className="mb-2.5 text-[18.5px] font-semibold text-[#222]">
                  {s.title}
                </h3>
                <p className="text-[15px] text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
