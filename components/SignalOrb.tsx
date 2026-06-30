const points = Array.from({ length: 28 }, (_, index) => {
  const angle = (Math.PI * 2 * index) / 28;
  const radius = 34 + (index % 4) * 11;

  return {
    left: 50 + Math.cos(angle) * radius,
    top: 50 + Math.sin(angle) * radius,
    size: 4 + (index % 3),
    opacity: 0.28 + (index % 5) * 0.08,
    delay: `${(index % 7) * 0.35}s`,
  };
});

export default function SignalOrb() {
  return (
    <div className="orb-scene relative h-[560px] w-full max-md:h-[420px]" aria-hidden="true">
      <div className="orb-rotor absolute inset-0">
        <div className="absolute inset-[12%] signal-orb rounded-full blur-[2px]" />
        <div className="orb-track orb-track-a absolute inset-[18%]">
          <div className="orb-ring absolute inset-0" />
        </div>
        <div className="orb-track orb-track-b absolute inset-[24%]">
          <div className="orb-ring absolute inset-0" />
        </div>
        <div className="orb-track orb-track-c absolute inset-[31%]">
          <div className="orb-ring absolute inset-0" />
        </div>
        <div className="absolute inset-[26%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.24),rgba(4,40,203,0.1)_28%,rgba(0,5,46,0.72)_74%)]" />

        {points.map((point, index) => (
          <span
            key={index}
            className="orb-particle absolute rounded-full bg-arc"
            style={{
              left: `${point.left}%`,
              top: `${point.top}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              opacity: point.opacity,
              animationDelay: point.delay,
              boxShadow: "0 0 18px rgba(52,252,255,0.25)",
            }}
          />
        ))}
      </div>

      <div className="data-card float-card-a absolute left-[4%] top-[10%] w-[200px] rounded-card p-4 text-white max-md:left-0 max-md:top-[4%] max-md:w-[170px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          новый регламент
        </div>
        <div className="mt-3 space-y-2 text-[12px] text-halo">
          <div>Скрывать переменные окружения</div>
          <div>Блокировать доступ к /prod/*</div>
          <div>Скрывать почту и номера карт</div>
        </div>
      </div>

      <div className="data-card float-card-b absolute right-[3%] top-[8%] w-[220px] rounded-card p-4 text-white max-md:right-0 max-md:top-[12%] max-md:w-[175px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          из терминала
        </div>
        <div className="mt-3 space-y-1.5 font-mono text-[11px] text-white/90">
          <div>DATABASE_URL=[скрыто]</div>
          <div>AWS_ACCESS_KEY_ID=[скрыто]</div>
          <div>STRIPE_SECRET_KEY=[скрыто]</div>
        </div>
      </div>

      <div className="data-card float-card-c absolute bottom-[10%] left-[8%] w-[210px] rounded-card p-4 text-white max-md:bottom-[6%] max-md:left-0 max-md:w-[170px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          из ответа инструмента
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 text-[12px] text-halo">
          <div>
            <div>канал</div>
            <div className="mt-1 text-[20px] text-white">mcp</div>
          </div>
          <div>
            <div>действие</div>
            <div className="mt-1 text-[20px] text-white">скрыть</div>
          </div>
        </div>
      </div>

      <div className="data-card float-card-d absolute bottom-[18%] right-[2%] w-[230px] rounded-card p-4 text-white max-md:bottom-[2%] max-md:right-0 max-md:w-[175px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-halo">
          реакция
        </div>
        <div className="mt-3 space-y-2">
          {[
            { label: "журнал события", width: "84%" },
            { label: "строгий режим", width: "56%" },
            { label: "проверка оператором", width: "43%" },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between text-[12px] text-halo">
                <span>{row.label}</span>
                <span>{row.width}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="dashboard-bar h-full rounded-full bg-blue" style={{ width: row.width }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
