import { Wrap } from "sai-landing";

export const Default = () => (
  <div className="bg-soft py-6">
    <Wrap>
      <div className="rounded-[10px] border border-dashed border-line-strong bg-white p-6 text-center text-[14px] text-muted">
        Контент, ограниченный контейнером max-w-[1180px] с адаптивными
        отступами
      </div>
    </Wrap>
  </div>
);
