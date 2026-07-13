import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://guard.techcatalyst.ru"),
  title: "Безопасное рабочее место разработчика | TechCatalyst Guard",
  description:
    "Решение в контуре заказчика для перехвата команд и маскирования учётных данных и персональной информации на рабочих станциях разработчиков. Терминал, MCP и буфер обмена работают под управлением корпоративных политик.",
  keywords:
    "защита данных разработчиков, безопасность ИИ-агентов, контроль терминала, контроль MCP, маскирование учётных данных, персональные данные, защита рабочих станций",
  openGraph: {
    title: "TechCatalyst Guard — учётные данные остаются на рабочей станции",
    description:
      "Перехват команд терминала, маскирование учётных данных и персональной информации, строгий режим и панель управления в контуре заказчика.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
