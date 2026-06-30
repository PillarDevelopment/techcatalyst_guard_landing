import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

const namedClients = [
  {
    name: "ООО МВС",
    work: "услуги по предоставлению удалённого доступа к большим языковым моделям",
    period: "06.2025 — настоящее время",
  },
  {
    name: "Альфа Консалт",
    work: "разработка и внедрение модели ИИ для анализа и поиска судебной практики по юридическим делам",
    period: "05.2023 — 06.2024",
  },
  {
    name: "Криптон Студио",
    work: "разработка API для процессинга финансовых продуктов клиента",
    period: "01.2023 — 11.2024",
  },
  {
    name: "3Commas",
    work: "разработка БД распределённого реестра и API для интеграции",
    period: "10.2021 — 04.2023",
  },
];

const ndaClients = [
  "AdSkill / AdWave LTD",
  "Adsterra / AD Market Limited",
  "Propeller Ads Ltd",
];

export default function Clients() {
  return (
    <section id="clients" className="bg-soft py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal>
          <Kicker>Клиенты и опыт</Kicker>
          <H2>Команда опирается не на теорию, а на реальный опыт внедрения</H2>
          <Lead>
            В `artifacts` проекта уже лежит справка об опыте. На лендинге
            показываем ту часть клиентского списка, которую корректно вынести в
            публичную плоскость, и отдельно отмечаем контракты с ограничением по раскрытию.
          </Lead>
        </Reveal>

        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {namedClients.map((client) => (
            <Reveal key={client.name}>
              <Card className="h-full">
                <div className="mb-3 text-[12px] font-semibold uppercase tracking-[.12em] text-blue">
                  {client.period}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#222]">{client.name}</h3>
                <p className="text-[15px] text-muted">{client.work}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[1.05fr_.95fr] gap-5 max-lg:grid-cols-1">
          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-3 text-[20px] font-semibold text-[#222]">Контракты с ограничением по раскрытию</h3>
              <p className="mb-4 text-[15px] text-muted">
                Часть проектов в области ИИ и инфраструктуры доступа закрыта соглашениями о неразглашении, поэтому
                публично показываем только названия компаний без раскрытия
                деталей внедрения.
              </p>
              <ul className="space-y-3">
                {ndaClients.map((name) => (
                  <li
                    key={name}
                    className="relative pl-[22px] text-[15px] text-muted before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-card border border-line bg-white p-7 shadow-card">
              <h3 className="mb-3 text-[20px] font-semibold text-[#222]">Какие задачи уже делали</h3>
              <ul className="space-y-3 text-[15px] text-muted">
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  доступ к большим языковым моделям и инфраструктура промежуточного доступа
                </li>
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  программный слой для интеграции и маршрутизации ИИ- и финансовой нагрузки
                </li>
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  прикладные модели ИИ под конкретные отраслевые сценарии
                </li>
                <li className="relative pl-[22px] before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']">
                  проекты, где важны контроль доступа, трассируемость и работа с чувствительными данными
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
