import { Wrap } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft py-[38px] text-[14.5px] text-dim">
      <Wrap className="flex flex-wrap items-center justify-between gap-[18px]">
        <span>© 2026 Techcatalyst · Guard</span>
        <span>
          <a href="mailto:info@2rm.ru" className="text-blue hover:underline">
            info@2rm.ru
          </a>{" "}
          ·{" "}
          <a
            href="https://techcatalyst.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue hover:underline"
          >
            techcatalyst.ru
          </a>
        </span>
      </Wrap>
    </footer>
  );
}
