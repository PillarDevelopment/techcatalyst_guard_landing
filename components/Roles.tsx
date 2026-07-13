import { Wrap, Kicker, H2, Card } from "./ui";
import Reveal from "./Reveal";

const roles = [
  {
    title: "Руководитель ИБ",
    items: [
      "Централизованные политики с областью действия по группам",
      "Все инциденты маскирования и блокировок — в одной панели",
      "Доказуемая целостность: подписи, tamper-события, аудит",
    ],
  },
  {
    title: "Платформенная команда",
    items: [
      "Подъём контура по документированному Compose-сценарию",
      "Раскатка агентов через привычный MDM-процесс",
      "Диагностика через интерфейсы проверки состояния и журналы",
    ],
  },
  {
    title: "Разработчик",
    items: [
      "Привычный терминал и инструменты сохраняют рабочий процесс",
      "Локальная обработка поддерживает привычную скорость",
      "Маскирование фокусирует контроль на данных и сохраняет приватность сотрудников",
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Для кого</Kicker>
          <H2>Каждой роли — своя ценность</H2>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {roles.map((r) => (
            <Reveal key={r.title}>
              <Card className="h-full">
                <h3 className="mb-3.5 text-[17.5px] font-semibold text-blue">
                  {r.title}
                </h3>
                <ul>
                  {r.items.map((it) => (
                    <li
                      key={it}
                      className="relative py-1.5 pl-[22px] text-[15px] text-muted before:absolute before:left-0 before:font-bold before:text-green before:content-['✓']"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
