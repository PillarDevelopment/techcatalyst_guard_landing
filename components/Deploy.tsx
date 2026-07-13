import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const blocks = [
  {
    title: "Серверная часть",
    tag: null,
    text: "Docker Compose, PostgreSQL и обратный прокси-сервер. Интерфейсы проверки состояния и готовности, структурированные журналы, выгрузка в Loki, документированное резервное копирование и восстановление.",
  },
  {
    title: "Раскатка агентов",
    tag: null,
    text: "Пакеты для macOS и Linux; Windows и PowerShell — целевой срок: IV квартал 2026 года. Развёртывание через MDM или систему управления ПО, автоматическая настройка командной оболочки и запуска агента.",
  },
  {
    title: "Масштаб",
    tag: null,
    text: "От пробного стенда до парка в 500–1500 рабочих станций. Документированный расчёт ресурсов, схема масштабирования и рекомендации по высокой доступности рабочего контура.",
  },
  {
    title: "Интеграции",
    tag: "план развития",
    text: "Единый вход и группы AD с управлением жизненным циклом, выгрузка событий в SIEM и Grafana с оповещениями, поставка через Kubernetes и Helm, режим Guard для внешних агентских систем.",
  },
];

const stack = [
  "docker compose",
  "postgresql",
  "подписанные версии политик",
  "zsh / bash / PowerShell",
  "macOS / Linux",
];

export default function Deploy() {
  return (
    <section id="deploy" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Развёртывание</Kicker>
          <H2>Полностью в вашем контуре</H2>
          <Lead>
            Серверная часть и данные полностью размещаются в инфраструктуре компании.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {blocks.map((b) => (
            <Reveal key={b.title}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-[#0d1326]">
                  {b.title}
                  {b.tag && (
                    <span className="ml-2 inline-block rounded-[10px] border border-amber/35 px-[11px] py-0.5 align-[2px] text-xs font-semibold tracking-[.03em] text-amber">
                      {b.tag}
                    </span>
                  )}
                </h3>
                <p className="text-[15px] text-muted">{b.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-[30px] flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-[10px] border border-line bg-white px-3.5 py-1.5 font-mono text-[13px] text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
