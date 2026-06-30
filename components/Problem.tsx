import Reveal from "./Reveal";
import { Card, Code, H2, Kicker, Lead, Wrap } from "./ui";

const pains = [
  {
    ico: "agent",
    title: "AI-агенты в терминале",
    text: (
      <>
        Coding-агент исполняет команды быстрее человека. Один <Code>cat .env</Code>{" "}
        превращает локальный секрет в контекст внешней модели.
      </>
    ),
  },
  {
    ico: "stdout",
    title: "Секреты в выводе",
    text: "Конфиги, PII, cloud credentials и внутренние артефакты штатно пролетают через stdout и попадают в tool-response.",
  },
  {
    ico: "mcp",
    title: "MCP как новый канал",
    text: "MCP даёт агенту доступ к файлам и ресурсам напрямую. Если локальный слой не контролирует ответы, утечка уже случилась.",
  },
  {
    ico: "copy",
    title: "Clipboard как side channel",
    text: "Токен, скопированный в буфер обмена, может оказаться в чате или веб-инструменте за секунды, минуя классический perimeter DLP.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-paper py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal className="max-w-[640px]">
          <Kicker>Problem framing</Kicker>
          <H2>Периметр не видит момент, когда AI-инструмент уже получил данные.</H2>
          <Lead>
            Утечка происходит не на сетевом шлюзе и не в SIEM. Она происходит в
            той точке, где workstation отдаёт вывод команды, MCP-ответ или
            clipboard прямо в агентский runtime.
          </Lead>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {pains.map((pain) => (
            <Reveal key={pain.title}>
              <Card className="h-full">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-blue">
                  {pain.ico}
                </div>
                <h3 className="mt-3 text-[27px] font-light leading-[1.2] tracking-[-0.014em] text-carbon">
                  {pain.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.57] text-slate">{pain.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-6 rounded-card border border-silver bg-paper px-5 py-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-fog">
              key conclusion
            </div>
            <p className="mt-2 text-[16px] leading-[1.57] text-slate">
              Сетевой шлюз просто стоит позже. К этому моменту контекст уже был
              собран. Поэтому enforcement должен жить на рабочей станции.
            </p>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
