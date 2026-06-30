"use client";

import { useEffect, useState } from "react";

type FakeDashboardProps = {
  variant?: "overview" | "policy" | "fleet";
  className?: string;
};

function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-silver px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ff6b61]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbf47]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="rounded-full border border-silver px-3 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-fog">
          guard.techcatalyst.ru
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="dashboard-dot h-2.5 w-2.5 rounded-full bg-blue" />
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">
          демонстрация
        </span>
      </div>
    </div>
  );
}

function OverviewDashboard() {
  const statSets = [
    [248, 3184, 126],
    [251, 3218, 129],
    [249, 3196, 124],
  ];
  const channelSets = [
    ["61%", "25%", "14%"],
    ["58%", "28%", "14%"],
    ["63%", "23%", "14%"],
  ];
  const barSets = [
    [24, 38, 28, 56, 44, 78, 66, 84, 74, 90, 68, 58],
    [28, 42, 36, 62, 49, 72, 64, 88, 71, 84, 61, 53],
    [22, 35, 31, 58, 46, 80, 69, 82, 76, 92, 66, 60],
  ];
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((value) => (value + 1) % statSets.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <TopBar />
      <div className="grid grid-cols-[180px_1fr] max-md:grid-cols-1">
        <div className="border-r border-silver p-4 max-md:border-r-0 max-md:border-b">
          <div className="space-y-2">
            {["Обзор", "События", "Политики", "Парк станций", "Метрики"].map((item, index) => (
              <div
                key={item}
                className={`rounded-[6px] px-3 py-2 text-[13px] ${
                  index === 0 ? "bg-blue text-white" : "text-fog"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
            {[
              ["Активные агенты", statSets[frame][0]],
              ["Скрытые секреты", statSets[frame][1]],
              ["Блокировки", statSets[frame][2]],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[8px] border border-silver p-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">{label}</div>
                <div className="mt-3 text-[28px] font-light tracking-[-0.03em] text-carbon">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-4 max-md:grid-cols-1">
            <div className="rounded-[8px] border border-silver p-4">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-[15px] font-medium text-carbon">Поток событий</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">24 часа</span>
              </div>
              <div className="dashboard-scan flex h-[160px] items-end gap-2">
                {barSets[frame].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-[4px] bg-blue/15">
                    <div
                      className="dashboard-bar w-full rounded-t-[4px] bg-blue"
                      style={{ height: `${height}%`, animationDelay: `${index * 0.08}s` }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-silver p-4">
              <h4 className="mb-4 text-[15px] font-medium text-carbon">Каналы</h4>
              <div className="space-y-3">
                {[
                  ["Терминал", channelSets[frame][0]],
                  ["MCP", channelSets[frame][1]],
                  ["Буфер обмена", channelSets[frame][2]],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-[13px] text-fog">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-blue/10">
                      <div className="dashboard-bar h-full rounded-full bg-blue" style={{ width: `${value}` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PolicyDashboard() {
  const rows = [
    ["блокировка чтения файлов с секретами", "терминал", "блокировать", "включено"],
    ["маскирование персональных данных в выводе", "терминал", "скрывать", "включено"],
    ["запрет ресурса /prod/*", "mcp", "блокировать", "черновик"],
    ["санитарная обработка буфера обмена", "буфер обмена", "скрывать", "включено"],
  ];
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveRow((value) => (value + 1) % rows.length), 1700);
    return () => clearInterval(id);
  }, [rows.length]);

  return (
    <>
      <TopBar />
      <div className="p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-[18px] font-medium tracking-[-0.01em] text-carbon">Редактор политик</h4>
          <div className="flex gap-2">
            <span className="metric-pill px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-fog">черновик</span>
            <span className="rounded-[6px] bg-blue px-3 py-1.5 text-[12px] font-medium text-white">Опубликовать</span>
          </div>
        </div>
        <div className="rounded-[8px] border border-silver">
          <div className="grid grid-cols-[1.2fr_0.6fr_0.6fr_0.5fr] gap-3 border-b border-silver px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-fog max-md:grid-cols-1">
            <span>Правило</span>
            <span>Канал</span>
            <span>Действие</span>
            <span>Состояние</span>
          </div>
          {rows.map((row, index) => (
            <div
              key={row[0]}
              className={`grid grid-cols-[1.2fr_0.6fr_0.6fr_0.5fr] gap-3 px-4 py-4 text-[13px] text-slate max-md:grid-cols-1 ${index > 0 ? "dashboard-row" : ""} ${activeRow === index ? "dashboard-active-row" : ""}`}
            >
              <span className="text-carbon">{row[0]}</span>
              <span>{row[1]}</span>
              <span>{row[2]}</span>
              <span className={row[3] === "включено" ? "text-blue" : "text-fog"}>{row[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FleetDashboard() {
  const fleetSets = [
    [
      ["188", "76%"],
      ["39", "16%"],
      ["21", "8%"],
    ],
    [
      ["192", "77%"],
      ["35", "14%"],
      ["21", "9%"],
    ],
    [
      ["186", "75%"],
      ["41", "17%"],
      ["21", "8%"],
    ],
  ];
  const actions = [
    "Обновить снимок политик для платформенной группы",
    "Подтвердить 12 новых macOS-агентов",
    "Проверить 8 событий блокировки MCP",
    "Выгрузить отчёт по качеству детектирования за 24 часа",
  ];
  const [frame, setFrame] = useState(0);
  const [activeAction, setActiveAction] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((value) => (value + 1) % fleetSets.length), 2200);
    const actionId = setInterval(
      () => setActiveAction((value) => (value + 1) % actions.length),
      1600
    );
    return () => {
      clearInterval(id);
      clearInterval(actionId);
    };
  }, [actions.length, fleetSets.length]);

  return (
    <>
      <TopBar />
      <div className="p-4">
        <div className="grid grid-cols-[1fr_0.9fr] gap-4 max-md:grid-cols-1">
          <div className="rounded-[8px] border border-silver p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-[15px] font-medium text-carbon">Состояние парка</h4>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">248 устройств</span>
            </div>
            <div className="space-y-3">
              {[
                ["в норме", ...fleetSets[frame][0]],
                ["требуют внимания", ...fleetSets[frame][1]],
                ["не на связи", ...fleetSets[frame][2]],
              ].map(([label, count, percent], index) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-[13px] text-fog">
                    <span className="text-carbon">{label}</span>
                    <span>{count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-blue/10">
                    <div
                      className="dashboard-bar h-full rounded-full bg-blue"
                      style={{ width: `${percent}`, animationDelay: `${index * 0.12}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-silver p-4">
            <h4 className="mb-4 text-[15px] font-medium text-carbon">Действия оператора</h4>
            <div className="space-y-2">
              {actions.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[6px] px-3 py-2 text-[13px] ${activeAction === index ? "dashboard-active-row text-carbon" : "bg-soft text-slate"}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function FakeDashboard({
  variant = "overview",
  className = "",
}: FakeDashboardProps) {
  return (
    <div className={`dashboard-shell overflow-hidden ${className}`}>
      {variant === "overview" && <OverviewDashboard />}
      {variant === "policy" && <PolicyDashboard />}
      {variant === "fleet" && <FleetDashboard />}
    </div>
  );
}
