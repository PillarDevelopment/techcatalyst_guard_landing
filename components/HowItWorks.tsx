import Reveal from "./Reveal";
import { Code, H2, Kicker, Lead, Wrap } from "./ui";

const tabs = [
  "Настройка",
  "Наблюдение",
  "Извлечение",
  "Реакция",
  "Работает постоянно",
];

export default function HowItWorks() {
  return (
    <section id="how" className="midnight-band py-[92px] max-sm:py-16">
      <Wrap>
        <Reveal className="mx-auto max-w-[860px] text-center">
          <Kicker className="justify-center text-arc">Как это работает</Kicker>
          <H2 className="text-white">
            Один раз задаёте правила. Дальше Guard ведёт каждую сессию так, как
            требует ваш контур.
          </H2>
          <Lead className="mx-auto max-w-[760px] text-halo">
            Локальный агент работает в оболочке разработчика, контролирует
            терминал, ответы инструментов и буфер обмена. Управляющая часть
            получает только факты срабатываний и состояние правил.
          </Lead>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-5 border-b border-white/12 pb-3 font-mono text-[11px] uppercase tracking-[0.09em] text-halo">
            {tabs.map((tab, index) => (
              <span key={tab} className={index === 1 ? "text-white" : ""}>
                {tab}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="space-y-5">
              <div className="data-card rounded-card p-5 text-white">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                  единоразовая настройка
                </div>
                <h3 className="mt-3 text-[27px] font-light leading-[1.2] tracking-[-0.014em]">
                  Что контролировать и что делать
                </h3>
                <div className="mt-4 space-y-3 text-[14px] text-halo">
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <span>Переменные окружения</span>
                    <Code>скрывать</Code>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <span>Личные данные в выводе</span>
                    <Code>скрывать</Code>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
                    <span>Доступ к путям /prod/*</span>
                    <Code>заблокировать</Code>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span>Внешняя выгрузка архива</span>
                    <Code>подтверждать</Code>
                  </div>
                </div>
              </div>

              <div className="data-card rounded-card p-5 text-white">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                  идёт на каждой сессии
                </div>
                <h3 className="mt-3 text-[27px] font-light leading-[1.2] tracking-[-0.014em]">
                  Guard видит поток до передачи наружу
                </h3>
                <div className="mt-4 space-y-2 font-mono text-[12px] text-white/90">
                  <div>~/payments-service $ cat .env</div>
                  <div>DATABASE_URL=[скрыто]</div>
                  <div>AWS_ACCESS_KEY_ID=[скрыто]</div>
                  <div>STRIPE_SECRET_KEY=[скрыто]</div>
                  <div className="pt-2 text-arc">
                    ▲ 3 секрета скрыты · политика corp-default v12
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="data-card rounded-card p-5 text-white">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                  из ответа инструмента
                </div>
                <h3 className="mt-3 text-[24px] font-light leading-[1.2] tracking-[-0.014em]">
                  Каждое поле связано с источником
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 text-[13px] text-halo">
                  <div>
                    <div>канал</div>
                    <div className="mt-1 text-[18px] text-white">mcp</div>
                  </div>
                  <div>
                    <div>тип</div>
                    <div className="mt-1 text-[18px] text-white">файл</div>
                  </div>
                  <div>
                    <div>ресурс</div>
                    <div className="mt-1 text-[18px] text-white">config.yml</div>
                  </div>
                  <div>
                    <div>действие</div>
                    <div className="mt-1 text-[18px] text-white">скрыть</div>
                  </div>
                </div>
              </div>

              <div className="data-card rounded-card p-5 text-white">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                  действие
                </div>
                <h3 className="mt-3 text-[24px] font-light leading-[1.2] tracking-[-0.014em]">
                  Реакция без ручного разбора
                </h3>
                <div className="mt-4 space-y-3 text-[13px] text-halo">
                  <div className="rounded-[6px] border border-white/10 px-3 py-2">
                    Доступ к /prod/secrets остановлен
                  </div>
                  <div className="rounded-[6px] border border-white/10 px-3 py-2">
                    Пользователь переведён в строгий режим
                  </div>
                  <div className="rounded-[6px] border border-white/10 px-3 py-2">
                    Событие записано в журнал
                  </div>
                </div>
              </div>

              <div className="data-card rounded-card p-5 text-white md:col-span-2">
                <div className="font-mono text-[11px] uppercase tracking-[0.09em] text-arc">
                  управляющий контур
                </div>
                <h3 className="mt-3 text-[24px] font-light leading-[1.2] tracking-[-0.014em]">
                  Снаружи вы видите только состояние, журнал и правила
                </h3>
                <div className="mt-4 grid gap-3 text-[13px] text-halo md:grid-cols-3">
                  <div className="rounded-[6px] border border-white/10 px-3 py-3">
                    Политики публикуются централизованно
                  </div>
                  <div className="rounded-[6px] border border-white/10 px-3 py-3">
                    Сырые секреты не уходят в телеметрию
                  </div>
                  <div className="rounded-[6px] border border-white/10 px-3 py-3">
                    Решение на машине принимается за миллисекунды
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Wrap>
    </section>
  );
}
