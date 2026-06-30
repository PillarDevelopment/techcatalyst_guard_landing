import Link from "next/link";
import { BtnPrimary, Wrap } from "./ui";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#how", label: "Схема" },
  { href: "#features", label: "Продукт" },
  { href: "#deploy", label: "Контур" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/90 backdrop-blur-md">
      <Wrap className="flex h-[74px] items-center gap-7 max-sm:h-[62px] max-sm:gap-3">
        <Link
          href="#"
          className="flex items-center gap-3 text-[18px] font-light tracking-[-0.02em] text-white max-sm:text-[15px]"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-[4px] border border-white/20 bg-white/5 font-mono text-[11px] uppercase tracking-[0.08em] text-arc">
            tg
          </span>
          <span>Techcatalyst Guard</span>
        </Link>
        <nav className="ml-auto flex gap-6 max-md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-light text-halo transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <BtnPrimary href="#pilot" small className="ml-auto md:ml-0">
          Запросить пилот
        </BtnPrimary>
      </Wrap>
    </header>
  );
}
