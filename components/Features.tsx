import FakeDashboard from "./FakeDashboard";
import Reveal from "./Reveal";
import { Card, H2, Kicker, Lead, Wrap } from "./ui";

const features = [
  {
    label: "terminal",
    title: "Защита терминала",
    text: "Streaming-маскирование stdout/stderr в реальном времени. Секреты и PII не попадают в контекст coding-агента.",
  },
  {
    label: "mcp",
    title: "Контроль MCP",
    text: "Локальный proxy инспектирует JSON-RPC, ограничивает ресурсы и маскирует ответы без поломки протокола.",
  },
  {
    label: "policy",
    title: "Policy lifecycle",
    text: "Draft → review → live, подписи снапшотов, scope по ролям и станциям, публикация на весь парк рабочих мест.",
  },
  {
    label: "repo",
    title: "Сканер репозиториев",
    text: "Локальный поиск секретов и PII в рабочей копии: benchmark-отчёты, suppression-правила и воспроизводимые метрики.",
  },
];

export default function Features() {
  return (
    <section id="features" className="midnight-band py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal className="max-w-[620px]">
          <Kicker className="text-arc">Product surfaces</Kicker>
          <H2 className="text-white">
            Одна платформа. Несколько продуктовых поверхностей.
          </H2>
          <Lead className="text-halo">
            Для пользователя это не только агент на рабочей станции. Это ещё и
            панель политик, fleet health и incident console. Пока без реальных
            скриншотов — здесь стоят временные product mockups.
          </Lead>
        </Reveal>

        <div className="mt-10 grid grid-cols-[1.05fr_0.95fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <FakeDashboard variant="policy" />
          </Reveal>
          <Reveal>
            <div className="space-y-5">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-white/12 bg-white/5 text-white"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                    {feature.label}
                  </div>
                  <h3 className="mt-3 text-[27px] font-light leading-[1.2] tracking-[-0.014em] text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.57] text-halo">{feature.text}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-5">
          <FakeDashboard variant="fleet" />
        </Reveal>
      </Wrap>
    </section>
  );
}
