import { Kicker } from "sai-landing";

export const Default = () => <Kicker>Безопасность рабочей станции</Kicker>;

export const OnDark = () => (
  <div className="rounded-[10px] bg-navy-950 p-6">
    <Kicker className="text-[#8b9cff]">В контуре заказчика</Kicker>
  </div>
);
