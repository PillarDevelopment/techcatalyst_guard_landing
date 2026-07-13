const marketingUrl = process.env.NEXT_PUBLIC_MARKETING_URL || "https://techcatalyst.ru";

const products = [
  { href: `${marketingUrl}/zakupka-zarubezhnogo-po`, label: "Зарубежное ПО" },
  { href: `${marketingUrl}/postavka-i-integraciya-ai`, label: "ИИ и интеграция" },
  { href: `${marketingUrl}/techcatalyst-vpn`, label: "TechCatalyst VPN" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-line bg-navy-950/90 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-[1180px] items-center gap-7 px-5 sm:px-7 lg:px-8 max-sm:min-h-[60px]">
        <a href={marketingUrl} className="flex shrink-0 items-center gap-2 text-[18px] font-bold tracking-[-0.01em] text-white">
          <span className="text-[#5468ff]">▲</span>
          <span>TechCatalyst</span>
          <span className="rounded-[5px] bg-[#5468ff]/15 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-[#aab8ff]">
            Guard
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          <a href={`${marketingUrl}/#products`} className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]">
            Продукты
          </a>
          {products.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]"
            >
              {item.label}
            </a>
          ))}
          <a href="#top" className="text-[14px] font-semibold text-[#aab8ff]">Guard</a>
          <a href="https://docs.techcatalyst.ru" className="text-[14px] font-medium text-navy-text transition-colors hover:text-[#aab8ff]">
            Документация
          </a>
        </nav>

        <a
          href="#pilot"
          className="ml-auto inline-flex shrink-0 items-center justify-center rounded-[10px] border border-blue bg-blue px-5 py-2.5 text-[14px] font-semibold text-white transition hover:-translate-y-px hover:border-blue-bright hover:bg-blue-bright lg:ml-0"
        >
          Обсудить задачу
        </a>
      </div>
    </header>
  );
}
