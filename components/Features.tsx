import { Wrap, Kicker, H2, Card } from "./ui";
import Reveal from "./Reveal";

const features = [
  {
    ico: "$",
    title: "Защита терминала",
    text: "Streaming-маскирование stdout/stderr в реальном времени. Вывод остаётся читаемым, секреты — нет.",
  },
  {
    ico: "⇄",
    title: "Защита MCP",
    text: "Локальный прокси инспектирует JSON-RPC запросы, блокирует доступ к запрещённым ресурсам и маскирует ответы — без поломки протокола.",
  },
  {
    ico: "⧉",
    title: "Защита буфера обмена",
    text: "Фоновый наблюдатель находит секреты в скопированном тексте, подменяет их маской и уведомляет пользователя.",
  },
  {
    ico: "⌕",
    title: "Сканер репозиториев",
    text: "Локальный поиск секретов и PII в рабочей копии кода: категоризированные отчёты, suppression-правила, воспроизводимые метрики.",
  },
  {
    ico: "§",
    title: "Централизованные политики",
    text: "Жизненный цикл draft → review → live, версионирование, scope по пользователям, группам и рабочим станциям, публикация на весь флот.",
  },
  {
    ico: "▦",
    title: "Admin-панель",
    text: "Инвентарь флота, heartbeat станций, таблица security-событий, редактор политик, метрики и управление лицензиями — без доступа к БД.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-[82px] lg:py-[100px]">
      <Wrap>
        <Reveal>
          <Kicker>Возможности</Kicker>
          <H2>Один агент — все каналы утечки</H2>
        </Reveal>
        <div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {features.map((f) => (
            <Reveal key={f.title}>
              <Card className="h-full">
                <span className="mb-[18px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-blue-soft font-mono text-[15px] font-semibold text-blue">
                  {f.ico}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#222]">{f.title}</h3>
                <p className="text-[15px] text-muted">{f.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
