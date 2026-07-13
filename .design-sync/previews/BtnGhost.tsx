import { BtnGhost } from "sai-landing";

export const Default = () => (
  <BtnGhost href="#pilot">Получить архитектуру решения</BtnGhost>
);

export const Dark = () => (
  <div className="rounded-[10px] bg-navy-950 p-8">
    <BtnGhost href="#pilot" dark>
      Получить архитектуру решения
    </BtnGhost>
  </div>
);
