type FakeDashboardProps = {
  variant?: "overview" | "policy" | "fleet";
  className?: string;
};

function TopBar() {
  return (
    <div className="flex items-center justify-between border-b border-silver px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-blue" />
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">
          Techcatalyst Guard Console
        </span>
      </div>
      <div className="metric-pill px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-fog">
        preview
      </div>
    </div>
  );
}

function OverviewDashboard() {
  return (
    <>
      <TopBar />
      <div className="grid grid-cols-[180px_1fr] max-md:grid-cols-1">
        <div className="border-r border-silver p-4 max-md:border-r-0 max-md:border-b">
          <div className="space-y-2">
            {["Overview", "Events", "Policies", "Fleet", "Benchmarks"].map((item, index) => (
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
              ["Active agents", "248"],
              ["Masked secrets", "3,184"],
              ["Blocked actions", "126"],
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
                <h4 className="text-[15px] font-medium text-carbon">Event stream</h4>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">last 24h</span>
              </div>
              <div className="flex h-[160px] items-end gap-2">
                {[24, 38, 28, 56, 44, 78, 66, 84, 74, 90, 68, 58].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-[4px] bg-blue/15">
                    <div className="w-full rounded-t-[4px] bg-blue" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[8px] border border-silver p-4">
              <h4 className="mb-4 text-[15px] font-medium text-carbon">Channels</h4>
              <div className="space-y-3">
                {[
                  ["Terminal", "61%"],
                  ["MCP", "25%"],
                  ["Clipboard", "14%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1 flex justify-between text-[13px] text-fog">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-blue/10">
                      <div className="h-full rounded-full bg-blue" style={{ width: value }} />
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
  return (
    <>
      <TopBar />
      <div className="p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-[18px] font-medium tracking-[-0.01em] text-carbon">Policy editor</h4>
          <div className="flex gap-2">
            <span className="metric-pill px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-fog">draft</span>
            <span className="rounded-[6px] bg-blue px-3 py-1.5 text-[12px] font-medium text-white">Publish</span>
          </div>
        </div>
        <div className="rounded-[8px] border border-silver">
          <div className="grid grid-cols-[1.2fr_0.6fr_0.6fr_0.5fr] gap-3 border-b border-silver px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em] text-fog max-md:grid-cols-1">
            <span>Rule</span>
            <span>Surface</span>
            <span>Action</span>
            <span>Status</span>
          </div>
          {[
            ["block secret-file access", "terminal", "block", "live"],
            ["mask PII in stdout", "terminal", "mask", "live"],
            ["deny resource /prod/*", "mcp", "block", "draft"],
            ["sanitize clipboard secrets", "clipboard", "mask", "live"],
          ].map((row, index) => (
            <div key={row[0]} className={`grid grid-cols-[1.2fr_0.6fr_0.6fr_0.5fr] gap-3 px-4 py-4 text-[13px] text-slate max-md:grid-cols-1 ${index > 0 ? "dashboard-row" : ""}`}>
              <span className="text-carbon">{row[0]}</span>
              <span>{row[1]}</span>
              <span>{row[2]}</span>
              <span className={row[3] === "live" ? "text-blue" : "text-fog"}>{row[3]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FleetDashboard() {
  return (
    <>
      <TopBar />
      <div className="p-4">
        <div className="grid grid-cols-[1fr_0.9fr] gap-4 max-md:grid-cols-1">
          <div className="rounded-[8px] border border-silver p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-[15px] font-medium text-carbon">Fleet health</h4>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">248 devices</span>
            </div>
            <div className="space-y-3">
              {[
                ["healthy", "188", "76%"],
                ["needs attention", "39", "16%"],
                ["offline", "21", "8%"],
              ].map(([label, count, percent]) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-[13px] text-fog">
                    <span className="text-carbon">{label}</span>
                    <span>{count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-blue/10">
                    <div className="h-full rounded-full bg-blue" style={{ width: percent }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-silver p-4">
            <h4 className="mb-4 text-[15px] font-medium text-carbon">Pending actions</h4>
            <div className="space-y-2">
              {[
                "Rotate policy snapshot for platform-team",
                "Approve 12 new macOS agents",
                "Review 8 MCP deny events",
                "Export 24h benchmark report",
              ].map((item) => (
                <div key={item} className="rounded-[6px] bg-soft px-3 py-2 text-[13px] text-slate">
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
