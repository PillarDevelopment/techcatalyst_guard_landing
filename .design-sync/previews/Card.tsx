import { Card } from "sai-landing";

export const Default = () => (
  <Card className="max-w-[360px]">
    <div className="font-mono text-[12px] uppercase tracking-[0.1em] text-dim">01</div>
    <h4 className="mt-2 text-[19px] font-semibold tracking-[-0.015em] text-[#0d1326]">
      Защита терминала
    </h4>
    <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">
      Потоковое маскирование секретов и персональных данных в выводе команд —
      до передачи ИИ-агенту.
    </p>
  </Card>
);

export const WithList = () => (
  <Card className="max-w-[380px]">
    <h4 className="text-[19px] font-semibold tracking-[-0.015em] text-[#0d1326]">
      Пилотное внедрение
    </h4>
    <ul className="mt-3 grid gap-2 text-[14px] text-ink">
      {["Разворачивание в контуре заказчика", "Пробная группа рабочих станций", "Критерии приёмки до старта"].map(
        (item) => (
          <li key={item} className="flex gap-2">
            <span className="text-green">✓</span>
            {item}
          </li>
        ),
      )}
    </ul>
  </Card>
);
