import { BtnPrimary } from "sai-landing";

export const Default = () => (
  <BtnPrimary href="#pilot">Запросить пробное внедрение</BtnPrimary>
);

export const Small = () => (
  <BtnPrimary href="#pilot" small>
    Обсудить задачу
  </BtnPrimary>
);

export const OnDark = () => (
  <div className="rounded-[10px] bg-navy-950 p-8">
    <BtnPrimary href="#pilot">Запросить пилот</BtnPrimary>
  </div>
);
