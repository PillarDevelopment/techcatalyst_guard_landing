import { Wrap, Kicker, H2, Lead, Card, Code } from "./ui";
import Reveal from "./Reveal";

const pains = [
  {
    ico: "ai",
    title: "AI-агенты в терминале",
    text: (
      <>
        Coding-агенты выполняют команды и читают вывод автоматически. Один{" "}
        <Code>cat .env</Code> — и креды уже в контексте внешней модели.
      </>
    ),
  },
  {
    ico: ">_",
    title: "Секреты в выводе команд",
    text: "Логи с PII, конфиги, состояние инфраструктуры, облачные креды — всё это штатно печатается в stdout и уходит дальше по конвейеру.",
  },
  {
    ico: "⧉",
    title: "Буфер обмена",
    text: "Скопированный токен оказывается в чате с ассистентом или внешнем веб-инструменте за секунды — незаметно для любых сетевых шлюзов.",
  },
  {
    ico: "⇄",
    title: "MCP-инструменты",
    text: "MCP-серверы дают агентам прямой доступ к файлам и ресурсам. Без локального контроля каждый инструмент — потенциальный канал утечки.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-soft py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal>
          <Kicker>Проблема</Kicker>
          <H2>AI-инструменты читают быстрее, чем DLP успевает среагировать</H2>
          <Lead>
            Разработчик подключил coding-агента — и тот за минуту выполнил больше
            команд, чем человек за час. Каждая команда возвращает вывод, и этот
            вывод уходит в контекст внешней модели автоматически — без злого
            умысла, просто потому что так работает агент.
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
            <b className="text-ink">Сетевой шлюз не решает задачу:</b> он стоит не
            там. Данные покидают рабочую станцию раньше, чем централизованные
            системы вообще узнают о событии.
          </p>
        </Reveal>
      </Wrap>
    </section>
  );
}
