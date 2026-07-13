import { Wrap, Kicker, H2, Lead, Card, Code } from "./ui";
import Reveal from "./Reveal";

const layers = [
  {
    title: "Комплексная защита потоков ИИ",
    text: (
      <>
        Защитный шлюз для большой языковой модели проверяет ввод и вывод между
        пользователем и моделью. TechCatalyst Guard расширяет контроль на
        терминал, MCP и буфер обмена ИИ-агентов.
      </>
    ),
  },
  {
    title: "Логика межсетевого экрана для ИИ-каналов",
    text: (
      <>
        Современный межсетевой экран использует многоуровневую защиту:
        инспекция контента, контроль действий, контекст пользователя, политики
        доступа и аудит событий в одной цепочке исполнения.
      </>
    ),
  },
  {
    title: "Контроль до ответа модели",
    text: (
      <>
        Ключевой принцип: останавливать утечку в момент возникновения, до
        попадания учётных данных, персональной информации или внутреннего
        материала в контекст внешней модели.
      </>
    ),
  },
];

const controls = [
  {
    b: "Проверка запросов.",
    text: "Проверка входящих команд, пользовательского запроса и параметров вызова инструмента на учётные данные, персональную информацию, попытки обхода политик и запрещённые классы запросов.",
  },
  {
    b: "Проверка ответов.",
    text: "Проверка stdout/stderr, MCP-ответов и буфера обмена до передачи агенту или модели: маскирование, редактирование или блокировка.",
  },
  {
    b: "Контроль действий.",
    text: "Политики определяют допустимые команды, каталоги, узлы, ресурсы MCP и операции для конкретной роли и рабочей станции.",
  },
  {
    b: "Контекстная политика.",
    text: "Решение учитывает строку, пользователя, группу, окружение, тип учётных данных, режим станции и целевой инструмент.",
  },
  {
    b: "Встроенный аудит.",
    text: "В контур поступают факты и метаданные срабатывания, а исходные значения остаются на рабочей станции. Такая схема поддерживает расследование в изолированном контуре данных.",
  },
];

const threats = [
  "внедрение вредоносных инструкций через ответы инструментов и документы",
  "утечка учётных данных из .env, журналов, настроек и stdout",
  "избыточный доступ ИИ-агента к инструментам MCP",
  "вывод данных через буфер обмена и побочные каналы",
];

export default function LLMFirewall() {
  return (
    <section id="llm-firewall" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Защитный контур ИИ</Kicker>
          <H2>Многоуровневый контроль данных и действий ИИ-агентов</H2>
          <Lead>
            Архитектура TechCatalyst Guard контролирует весь путь данных и
            действий вокруг модели: запросы, команды, ответы инструментов,
            локальные ресурсы и события аудита.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {layers.map((item) => (
            <Reveal key={item.title}>
              <Card className="h-full">
                <span className="mb-[18px] inline-flex rounded-[10px] bg-blue-soft px-3 py-1 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                  Уровень
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">{item.title}</h3>
                <p className="text-[15px] text-muted">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-[1.05fr_.95fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-4 text-[22px] font-semibold text-[#0d1326]">
                Что делает защитный слой в контуре разработчика
              </h3>
              <ul className="space-y-3">
                {controls.map((item) => (
                  <li
                    key={item.b}
                    className="flex gap-3.5 border-b border-[#e4e8f4] py-[13px] text-base last:border-b-0"
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
              <div className="mb-4 inline-flex rounded-[10px] bg-blue-soft px-3 py-1 font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] text-blue">
                Контролируемые угрозы
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
                <b className="text-ink">Практический вывод:</b> полноценная защита
                охватывает локальные команды, вызовы и ответы инструментов, запросы
                к модели и события аудита в единой цепочке контроля.
              </p>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
