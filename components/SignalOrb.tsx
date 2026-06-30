const points = Array.from({ length: 28 }, (_, index) => {
  const angle = (Math.PI * 2 * index) / 28;
  const radius = 34 + (index % 4) * 11;

  return {
    left: 50 + Math.cos(angle) * radius,
    top: 50 + Math.sin(angle) * radius,
    size: 4 + (index % 3),
    opacity: 0.28 + (index % 5) * 0.08,
  };
});

export default function SignalOrb() {
  return (
    <div className="relative h-[560px] w-full max-md:h-[420px]" aria-hidden="true">
      <div className="absolute inset-[12%] signal-orb rounded-full blur-[2px]" />
      <div className="orb-ring absolute inset-[18%]" />
      <div className="orb-ring absolute inset-[24%]" />
      <div className="orb-ring absolute inset-[31%]" />
      <div className="absolute inset-[26%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.24),rgba(4,40,203,0.1)_28%,rgba(0,5,46,0.72)_74%)]" />

      {points.map((point, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-arc"
          style={{
            left: `${point.left}%`,
            top: `${point.top}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            opacity: point.opacity,
            boxShadow: "0 0 18px rgba(52,252,255,0.25)",
          }}
        />
      ))}

      <div className="data-card absolute left-[6%] top-[18%] w-[180px] rounded-card p-4 text-white">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          policy sync
        </div>
        <div className="mt-2 text-[26px] font-light tracking-[-0.03em]">12ms</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-arc" />
        </div>
      </div>

      <div className="data-card absolute right-[7%] top-[12%] w-[210px] rounded-card p-4 text-white">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          workstation state
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 text-[12px] text-halo">
          <div>
            <div>agents</div>
            <div className="mt-1 text-[22px] text-white">248</div>
          </div>
          <div>
            <div>strict</div>
            <div className="mt-1 text-[22px] text-white">94%</div>
          </div>
        </div>
      </div>

      <div className="data-card absolute bottom-[12%] left-[10%] w-[200px] rounded-card p-4 text-white">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          masked secrets
        </div>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-[30px] font-light tracking-[-0.04em]">3,184</span>
          <span className="pb-1 text-[12px] text-arc">+18%</span>
        </div>
      </div>

      <div className="data-card absolute bottom-[20%] right-[4%] w-[230px] rounded-card p-4 text-white">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          incident lanes
        </div>
        <div className="mt-3 space-y-2">
          {[
            { label: "terminal", width: "84%" },
            { label: "mcp", width: "56%" },
            { label: "clipboard", width: "43%" },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between text-[12px] text-halo">
                <span>{row.label}</span>
                <span>{row.width}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-blue" style={{ width: row.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
