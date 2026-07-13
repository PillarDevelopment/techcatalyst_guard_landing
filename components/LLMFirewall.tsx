import { Wrap, Kicker, H2, Lead, Card, Code } from "./ui";
import Reveal from "./Reveal";

const layers = [
  {
    title: "Не просто фильтр промптов",
    text: (
      <>
        Обычный <Code>LLM firewall</Code> часто понимают как слой между
        пользователем и моделью, который проверяет ввод и вывод. Этого уже мало:
        у coding-агентов данные текут ещё и через терминал, MCP и clipboard.
      </>
    ),
  },
  {
    title: "NGFW-логика для AI-каналов",
    text: (
      <>
        Как и <Code>NGFW</Code> в сетях, защита должна быть многоуровневой:
        инспекция контента, контроль действий, контекст пользователя, политики
        доступа и аудит событий в одной цепочке исполнения.
      </>
    ),
  },
  {
    title: "Контроль до ответа модели",
    text: (
      <>
        Ключевой принцип: не разбирать инцидент постфактум, а останавливать
        утечку до того, как секрет, PII или внутренний артефакт попадёт в
        контекст внешней модели.
      </>
    ),
  },
];

const controls = [
  {
    b: "Prompt inspection.",
    text: "Проверка входящих команд, user prompt и параметров tool-вызова на секреты, PII, jailbreak-паттерны и запрещённые классы запросов.",
  },
  {
    b: "Response inspection.",
    text: "Проверка stdout/stderr, MCP-ответов и буфера обмена до передачи агенту или модели: маскирование, редактирование или блокировка.",
  },
  {
    b: "Action control.",
    text: "Политики определяют, какие команды, директории, хосты, MCP-resources и операции вообще допустимы для конкретной роли и станции.",
  },
  {
    b: "Context-aware policy.",
    text: "Решение зависит не только от строки, но и от пользователя, группы, окружения, типа секрета, режима станции и целевого инструмента.",
  },
  {
    b: "Audit by design.",
    text: "В контур уходят факты и метаданные срабатывания, а не сырые секреты. Это даёт расследование без нового канала утечки.",
  },
];

const threats = [
  "prompt injection через tool-output и документы",
  "утечка секретов из .env, логов, конфигов и stdout",
  "избыточный доступ AI-агента к MCP-инструментам",
  "data exfiltration через copy/paste и side channels",
];

export default function LLMFirewall() {
  return (
    <section id="llm-firewall" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>LLM-Firewall</Kicker>
          <H2>От «фильтра для модели» к NGFW для AI-агентов</H2>
          <Lead>
            Мы сознательно используем термин <Code>LLM firewall</Code>, но в
            практической архитектуре идём дальше: защита должна работать как
            AI-native аналог <Code>NGFW</Code>, то есть контролировать не только
            prompt, а весь путь данных и действий вокруг модели.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {layers.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <span className="mb-[18px] inline-flex rounded-full bg-blue-soft px-3 py-1 text-[12px] font-semibold uppercase tracking-[.1em] text-blue">
                  Layer
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#222]">{item.title}</h3>
                <p className="text-[15px] text-muted">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-[1.05fr_.95fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-4 text-[22px] font-semibold text-[#222]">
                Что делает NGFW-подобный слой в контуре разработчика
              </h3>
              <ul className="space-y-3">
                {controls.map((item) => (
                  <li
                    key={item.b}
                    className="flex gap-3.5 border-b border-[#e6eaf4] py-[13px] text-base last:border-b-0"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-[13px] font-bold text-green">
                      ✓
                    </span>
                    <span className="text-muted">
                      <b className="text-ink">{item.b}</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-card border border-line bg-white p-[26px] shadow-panel">
              <div className="mb-4 inline-flex rounded-full bg-blue-soft px-3 py-1 text-[12px] font-semibold uppercase tracking-[.1em] text-blue">
                Covered threats
              </div>
              <div className="rounded-2xl border border-line bg-soft p-5">
                <ul className="space-y-3 text-[15px] text-muted">
                  {threats.map((threat) => (
                    <li key={threat} className="flex gap-3">
                      <span className="mt-[9px] h-2 w-2 rounded-full bg-amber" />
                      <span>{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 rounded-2xl border border-line border-l-4 border-l-blue bg-white px-[22px] py-4 text-[15px] text-muted">
                <b className="text-ink">Практический вывод:</b> если защита не
                видит локальные команды, tool-calls и ответы инструментов, то это
                ещё не firewall для AI-агента, а только фильтр на одном из
                участков тракта.
              </p>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
