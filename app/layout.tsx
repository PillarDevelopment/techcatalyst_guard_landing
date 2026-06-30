import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://guard.techcatalyst.ru"),
  title: "Techcatalyst Guard | локальная защита агентских систем на рабочих станциях",
  description:
    "Techcatalyst Guard перехватывает команды терминала, ответы инструментов и буфер обмена на рабочей станции разработчика. Локальный контур, централизованные политики и скрытие секретов до передачи во внешнюю модель.",
  keywords:
    "Techcatalyst Guard, защита терминала, контроль MCP, защита рабочей станции разработчика, скрытие секретов, агентские системы, локальный контур безопасности",
  openGraph: {
    title: "Techcatalyst Guard — контроль агентских систем на рабочих станциях",
    description:
      "Локальная платформа для контроля терминала, MCP и буфера обмена до того, как данные попадут во внешнюю модель.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${plexMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
