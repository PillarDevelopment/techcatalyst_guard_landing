import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const blocks = [
  {
    title: "Серверная часть",
    tag: null,
    text: "Docker Compose, PostgreSQL, reverse proxy. Health/readiness-эндпоинты, структурированные логи, опциональный экспорт в Loki, документированный backup/restore.",
  },
  {
    title: "Раскатка агентов",
    tag: null,
    text: "Пакеты для macOS и Linux; Windows / PowerShell — целевой срок Q4 2026. Развёртывание через MDM / software center, автонастройка shell-интеграций и автозапуска после установки.",
  },
  {
    title: "Масштаб",
    tag: null,
    text: "От пилотного стенда до парка в 500–1500 рабочих станций. Документированный sizing, схема масштабирования и HA-рекомендации для продуктивного контура.",
  },
  {
    title: "Интеграции",
    tag: "roadmap",
    text: "SSO / AD-группы с lifecycle-деактивацией, выгрузка событий в SIEM и Grafana/alerting, Kubernetes/Helm-поставка, guard-mode для внешних агентских систем.",
  },
];

const stack = [
  "docker compose",
  "postgresql",
  "signed policy snapshots",
  "zsh / bash / powershell",
  "macos / linux",
];

export default function Deploy() {
  return (
    <section id="deploy" className="py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal>
          <Kicker>Развёртывание</Kicker>
          <H2>Полностью в вашем контуре</H2>
          <Lead>
            Никаких облачных зависимостей: серверная часть и данные остаются в
            инфраструктуре компании.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {blocks.map((b) => (
            <Reveal key={b.title}>
              <Card className="h-full">
                <h3 className="mb-2 text-lg font-semibold text-[#222]">
                  {b.title}
                  {b.tag && (
                    <span className="ml-2 inline-block rounded-full border border-amber/35 px-[11px] py-0.5 align-[2px] text-xs font-semibold tracking-[.03em] text-amber">
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
                className="rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[13px] text-muted"
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
