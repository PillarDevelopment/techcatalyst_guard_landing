import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const blocks = [
  {
    title: "Серверная часть",
    tag: null,
    text: "Сервисная схема на Docker Compose и PostgreSQL, обратный прокси, проверки состояния, структурированные логи, опциональная выгрузка в Loki и документированный сценарий резервного копирования и восстановления.",
  },
  {
    title: "Раскатка агентов",
    tag: null,
    text: "Пакеты для macOS и Linux; Windows и PowerShell — целевой срок четвёртый квартал 2026 года. Развёртывание через MDM или центр управления ПО, автоматическая настройка оболочки и автозапуска после установки.",
  },
  {
    title: "Масштаб",
    tag: null,
    text: "От пилотного стенда до парка в 500–1500 рабочих станций. Документированные требования по ресурсам, схема масштабирования и рекомендации по отказоустойчивости для продуктивного контура.",
  },
  {
    title: "Интеграции",
    tag: "roadmap",
    text: "SSO и группы Active Directory с управляемым отключением доступа, выгрузка событий в SIEM и Grafana, поставка через Kubernetes и Helm, а также режим защиты для внешних агентских систем.",
  },
];

const stack = [
  "docker compose",
  "postgresql",
  "подписанные снимки политик",
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
