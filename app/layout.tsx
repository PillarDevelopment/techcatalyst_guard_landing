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
  title: "Techcatalyst Guard | On-prem защита AI-агентов на рабочих станциях",
  description:
    "Techcatalyst Guard перехватывает команды терминала, MCP-ответы и clipboard на рабочей станции разработчика. On-prem контроль, централизованные политики и маскирование секретов до отправки в AI.",
  keywords:
    "Techcatalyst Guard, AI workstation security, on-prem security, защита терминала, контроль MCP, маскирование секретов, security for coding agents",
  openGraph: {
    title: "Techcatalyst Guard — контроль AI-агентов на рабочих станциях",
    description:
      "On-prem платформа для контроля терминала, MCP и clipboard до того, как данные попадут во внешнюю модель.",
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
