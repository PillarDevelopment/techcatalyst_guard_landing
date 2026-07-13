import { Wrap } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-navy-line bg-navy-950 py-12 text-[14px]">
      <Wrap className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="flex items-center gap-2 text-[15px] font-semibold text-white">
            <span className="text-[#5468ff]">▲</span>
            TechCatalyst
            <span className="rounded-[5px] bg-[#5468ff]/15 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[#aab8ff]">
              Guard
            </span>
          </div>
          <p className="mt-3 max-w-[520px] leading-[1.55] text-navy-text">
            TechCatalyst Guard — безопасное рабочее место разработчика для работы с AI-агентами.
          </p>
          <p className="mt-3 text-[#6a74a3]">
            ИП Борисов Иван Анатольевич · ИНН 575307745402 · ОГРНИП 320574900010615
          </p>
        </div>

        <div className="grid gap-2 lg:justify-end">
          <a href="mailto:info@2rm.ru" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            info@2rm.ru
          </a>
          <a href="https://t.me/pillardev" target="_blank" rel="noreferrer" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            Telegram
          </a>
          <a href="https://techcatalyst.ru/privacy" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            Политика конфиденциальности
          </a>
          <a href="https://techcatalyst.ru/cookie" className="text-navy-text transition-colors hover:text-[#aab8ff]">
            Политика cookie
          </a>
          <a
            href="https://techcatalyst.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6a74a3] transition-colors hover:text-[#aab8ff]"
          >
            © 2026 ТехКаталист
          </a>
        </div>
      </Wrap>
    </footer>
  );
}
