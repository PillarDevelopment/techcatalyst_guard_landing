import Reveal from "./Reveal";
import { Card, Code, H2, Kicker, Lead, Wrap } from "./ui";

const lanes = [
  {
    title: "Prompt layer",
    text: (
      <>
        Проверка user prompt, tool-call параметров и попыток обойти политику ещё
        до исполнения запроса.
      </>
    ),
  },
  {
    title: "Execution layer",
    text: (
      <>
        Контроль команд, ресурсов, директорий и доступных MCP surface-area во
        время реального исполнения.
      </>
    ),
  },
  {
    title: "Response layer",
    text: (
      <>
        Маскирование и блокировка <Code>stdout/stderr</Code>, tool-output и
        clipboard до возврата в агент.
      </>
    ),
  },
];

export default function LLMFirewall() {
  return (
    <section id="llm-firewall" className="midnight-band py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal className="max-w-[660px]">
          <Kicker className="text-arc">LLM firewall, expanded</Kicker>
          <H2 className="text-white">
            Не фильтр промптов, а полный NGFW-слой вокруг AI-исполнения.
          </H2>
          <Lead className="text-halo">
            Если защита видит только prompt, но не видит terminal, MCP и
            tool-output, она защищает только часть тракта. Techcatalyst Guard
            строится как execution-aware control plane для developer workflow.
          </Lead>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {lanes.map((lane) => (
            <Reveal key={lane.title}>
              <Card className="h-full border-white/12 bg-white/5">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                  lane
                </div>
                <h3 className="mt-3 text-[27px] font-light leading-[1.2] tracking-[-0.014em] text-white">
                  {lane.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.57] text-halo">{lane.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
