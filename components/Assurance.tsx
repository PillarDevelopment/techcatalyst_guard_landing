import { Wrap, Kicker, H2, Lead, Card } from "./ui";
import Reveal from "./Reveal";

// NOTE: статус сертификации и сроки подтвердите перед публикацией.
// Сейчас отражено: реестр отеч. ПО / ФСТЭК — заявка в процессе (см. вопрос CISO).
const pillars = [
  {
    title: "Детектирование, а не «чёрный ящик»",
    items: [
      "Precision/recall измеряем на ваших репозиториях, метрики воспроизводимы",
      "Пороги и категории настраиваются, есть suppression-правила",
      "Benchmark-отчёт по итогам пилота — с цифрами, а не обещаниями",
    ],
  },
  {
    title: "Данные и соответствие (РФ)",
    items: [
      "On-prem: данные не покидают ваш контур и РФ-юрисдикцию — это закрывает локализацию по 152-ФЗ",
      "Сырые секреты не уходят в телеметрию даже внутри контура",
      "Реестр отечественного ПО и сертификация ФСТЭК — заявка в процессе, статус по запросу",
    ],
  },
  {
    title: "Непрерывность вендора",
    items: [
      "Решение работает в вашем контуре без обращений к нам (no phone-home)",
      "Не перестанет работать, если мы будем недоступны",
      "Source code escrow по запросу: исходники депонируются у независимого агента",
    ],
  },
];

export default function Assurance() {
  return (
    <section id="assurance" className="py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal>
          <Kicker>Доверие и проверяемость</Kicker>
          <H2>Что enterprise проверяет на due diligence — мы отвечаем заранее</H2>
          <Lead>
            Мы ранний вендор и не прячем это. Поэтому отвечаем на неудобные
            вопросы безопасности прямо здесь, а не на финальной стадии закупки.
          </Lead>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {pillars.map((p) => (
            <Reveal key={p.title}>
              <Card className="h-full">
                <h3 className="mb-3.5 text-[17.5px] font-semibold text-blue">
                  {p.title}
                </h3>
                <ul>
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="relative py-1.5 pl-[22px] text-[15px] text-muted before:absolute before:left-0 before:top-[7px] before:font-bold before:text-green before:content-['✓']"
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
