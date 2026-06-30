import { Wrap, Kicker, H2, Card } from "./ui";
import Reveal from "./Reveal";

const roles = [
  {
    title: "Информационная безопасность",
    items: [
      "Централизованные политики с разделением по группам",
      "Все инциденты маскирования и блокировок — в одной панели",
      "Доказуемая целостность: подписи, события подмены и аудит",
    ],
  },
  {
    title: "Платформа и эксплуатация",
    items: [
      "Подъём контура по документированному сценарию Compose",
      "Раскатка агентов через привычный MDM-процесс",
      "Диагностика по проверкам состояния и логам",
    ],
  },
  {
    title: "Разработчик",
    items: [
      "Привычный терминал и инструменты — ничего не ломается",
      "Локальная обработка без ощутимой задержки",
      "Маскирование вместо слежки: контролируются данные, а не люди",
    ],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="bg-soft py-[92px] max-sm:py-16">
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
