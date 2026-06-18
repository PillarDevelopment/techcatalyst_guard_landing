import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://guard.techcatalyst.ru"),
  title: "Защита рабочих станций разработчиков от утечек в AI | Techcatalyst Guard",
  description:
    "On-prem решение для перехвата команд и маскирования секретов и PII на рабочих станциях разработчиков. Терминал, MCP, clipboard — под контролем ваших политик. Данные не покидают контур.",
  keywords:
    "DLP для разработчиков, защита секретов от AI, on-prem DLP терминал, контроль MCP, маскирование секретов, PII, защита рабочих станций",
  openGraph: {
    title: "Techcatalyst Guard — учётные данные не покидают рабочую станцию",
    description:
      "Перехват команд терминала, маскирование секретов и PII в реальном времени, strict mode и on-prem панель управления.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={rubik.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
