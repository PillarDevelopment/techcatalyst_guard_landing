import Link from "next/link";
import { Wrap, BtnPrimary } from "./ui";

const links = [
  { href: "#problem", label: "Проблема" },
  { href: "#how", label: "Как работает" },
  { href: "#features", label: "Возможности" },
  { href: "#deploy", label: "Развёртывание" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <Wrap className="flex h-[68px] items-center gap-7 max-sm:h-[58px] max-sm:gap-3">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-[-.01em] text-[#222] max-sm:text-[15px]"
        >
          <span className="text-blue">▲</span>
          <span>
            Techcatalyst&nbsp;<span className="text-blue">Guard</span>
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 max-md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-blue"
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
