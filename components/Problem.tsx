import { Wrap, Kicker, H2, Lead, Card, Code } from "./ui";
import Reveal from "./Reveal";

const pains = [
  {
    ico: "ai",
    title: "AI-агенты в терминале",
    text: (
      <>
        ИИ-агенты выполняют команды и читают вывод автоматически. Один{" "}
        <Code>cat .env</Code> — и учётные данные уже в контексте внешней модели.
      </>
    ),
  },
  {
    ico: ">_",
    title: "Секреты в выводе команд",
    text: "Журналы с персональными данными, настройки, состояние инфраструктуры и облачные учётные данные штатно выводятся в stdout и поступают дальше по цепочке.",
  },
  {
    ico: "⧉",
    title: "Буфер обмена",
    text: "Скопированный токен за секунды попадает в чат с ассистентом или внешний веб-инструмент, опережая реакцию сетевого шлюза.",
  },
  {
    ico: "⇄",
    title: "MCP-инструменты",
    text: "MCP-серверы дают агентам прямой доступ к файлам и ресурсам. Локальный контроль закрывает потенциальные каналы утечки на уровне каждого инструмента.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Проблема</Kicker>
          <H2>AI-инструменты читают быстрее, чем DLP успевает среагировать</H2>
          <Lead>
            Разработчик подключил ИИ-агента — и тот за минуту выполнил больше
            команд, чем человек за час. Каждая команда возвращает вывод, и этот
            вывод автоматически поступает в контекст внешней модели: это штатная
            логика работы агента.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {pains.map((p) => (
            <Reveal key={p.title}>
              <Card className="h-full">
                <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-blue-soft font-mono text-[15px] font-semibold text-blue">
                  {p.ico}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#222]">{p.title}</h3>
                <p className="text-[15px] text-muted">{p.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-9 max-w-[780px] rounded-2xl border border-line border-l-4 border-l-amber bg-white px-[26px] py-5 text-muted">
            <b className="text-ink">Сетевой шлюз расположен дальше по цепочке:</b>{" "}
            данные успевают выйти с рабочей станции до реакции централизованных
            систем. Локальный агент переносит контроль в точку возникновения события.
          </p>
        </Reveal>
      </Wrap>
    </section>
  );
}
