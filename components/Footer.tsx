import { Wrap } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft py-12 text-[14px]">
      <Wrap className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="text-[15px] font-semibold text-[#222]">TechCatalyst</div>
          <p className="mt-3 max-w-[520px] leading-[1.55] text-muted">
            TechCatalyst Guard — безопасное рабочее место разработчика для работы с AI-агентами.
          </p>
          <p className="mt-3 text-dim">
            ИП Борисов Иван Анатольевич · ИНН 575307745402 · ОГРНИП 320574900010615
          </p>
        </div>

        <div className="grid gap-2 lg:justify-end">
          <a href="mailto:info@2rm.ru" className="text-muted transition-colors hover:text-blue">
            info@2rm.ru
          </a>
          <a href="https://t.me/pillardev" target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-blue">
            Telegram
          </a>
          <a href="https://techcatalyst.ru/privacy" className="text-muted transition-colors hover:text-blue">
            Политика конфиденциальности
          </a>
          <a href="https://techcatalyst.ru/cookie" className="text-muted transition-colors hover:text-blue">
            Политика cookie
          </a>
          <a
            href="https://techcatalyst.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim transition-colors hover:text-blue"
          >
            © 2026 ТехКаталист
          </a>
        </div>
      </Wrap>
    </footer>
  );
}
