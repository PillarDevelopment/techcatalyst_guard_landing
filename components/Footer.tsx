import { Wrap } from "./ui";

export default function Footer() {
  return (
    <footer className="midnight-band border-t border-white/10 py-[38px] text-[14px] text-halo">
      <Wrap className="flex flex-wrap items-center justify-between gap-[18px]">
        <span>© 2026 Techcatalyst Guard</span>
        <span>
          <a href="mailto:info@2rm.ru" className="text-arc hover:underline">
            info@2rm.ru
          </a>{" "}
          ·{" "}
          <a
            href="https://techcatalyst.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-arc hover:underline"
          >
            techcatalyst.ru
          </a>
        </span>
      </Wrap>
    </footer>
  );
}
