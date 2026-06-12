import { Wrap, Kicker, H2, Code } from "./ui";
import Reveal from "./Reveal";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Уходят ли данные из нашего контура?",
    a: "Нет. Серверная часть, база данных и все события размещаются в инфраструктуре заказчика. Сырые секреты не отправляются в телеметрию даже внутри контура — в события попадают только факты срабатываний и категории данных.",
  },
  {
    q: "Может ли разработчик отключить защиту?",
    a: "В strict mode — нет: агент, shell-интеграции и политики защищены от отключения и ручной подмены. Попытка модификации конфига фиксируется, агент переходит в строгий fallback-режим. Для менее критичных групп доступен гибкий режим с локальным переключателем.",
  },
  {
    q: "Какие ОС и шеллы поддерживаются?",
    a: (
      <>
        Пилотный контур: macOS и Linux с <Code>zsh</Code> и <Code>bash</Code>.
        Поддержка PowerShell и полный Windows-контур — в ближайшем roadmap.
      </>
    ),
  },
  {
    q: "Это замедлит работу в терминале?",
    a: "Обработка полностью локальная и детерминированная (rule-based + regexp-детекторы), без сетевых запросов в критическом пути. Для обычных терминальных сценариев задержка незаметна. Защита продолжает работать даже при недоступности сервера.",
  },
  {
    q: "Как разворачивается серверная часть?",
    a: "Docker Compose с PostgreSQL по документированному сценарию — поднимается силами вашей платформенной команды. Предоставляем архитектурную схему, sizing и runbook по эксплуатации, включая backup/restore.",
  },
  {
    q: "Чем это отличается от DLP или секрет-сканера?",
    a: "Классический DLP смотрит на сеть и периметр, сканеры — на код в репозитории. Techcatalyst Guard контролирует саму точку исполнения: команды и их вывод на рабочей станции, где данные впервые попадают в AI-инструменты. Сканер репозиториев при этом входит в продукт как вспомогательный контур.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-soft py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal className="text-center">
          <Kicker>FAQ</Kicker>
          <H2>Частые вопросы</H2>
        </Reveal>
        <Reveal className="mx-auto mt-11 max-w-[800px]">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="mb-3 rounded-2xl border border-line bg-white px-[26px] transition-shadow open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none justify-between gap-[18px] py-5 text-[17px] font-semibold text-[#222]">
                {f.q}
              </summary>
              <p className="max-w-[690px] pb-[22px] text-[15.5px] text-muted">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
