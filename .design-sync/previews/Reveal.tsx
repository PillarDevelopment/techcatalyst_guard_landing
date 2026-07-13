import { Reveal } from "sai-landing";

export const Default = () => (
  <Reveal>
    <div className="max-w-[380px] rounded-card border border-line bg-white p-6 shadow-card">
      <h4 className="text-[18px] font-semibold text-[#0d1326]">
        Появление при прокрутке
      </h4>
      <p className="mt-2 text-[14px] leading-[1.6] text-muted">
        Обёртка Reveal плавно поднимает и проявляет содержимое, когда блок
        попадает во вьюпорт (IntersectionObserver, класс rv → rv-on).
      </p>
    </div>
  </Reveal>
);
