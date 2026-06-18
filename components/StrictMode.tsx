import { Wrap, Kicker, H2, BtnPrimary } from "./ui";
import Reveal from "./Reveal";

const points = [
  {
    b: "Подписанные политики.",
    text: "Каждый снапшот политики подписывается сервером и проверяется агентом локально.",
  },
  {
    b: "Tamper detection.",
    text: "Ручная правка конфига или политики обнаруживается — агент переходит в строгий fallback и сообщает в контур.",
  },
  {
    b: "Без локального опт-аута.",
    text: "В strict mode пользователь не может отключить агент или shell-интеграции.",
  },
  {
    b: "Минимизация телеметрии.",
    text: "В события попадают факты срабатываний, а не сырые секреты.",
  },
];

export default function StrictMode() {
  return (
    <section id="strict" className="bg-soft py-[92px] max-sm:py-16">
      <Wrap className="grid grid-cols-2 items-center gap-14 max-md:grid-cols-1">
        <Reveal>
          <Kicker>Trust model</Kicker>
          <H2>Strict mode: защита, которую нельзя выключить</H2>
          <ul className="mt-2.5">
            {points.map((p) => (
              <li
                key={p.b}
                className="flex gap-3.5 border-b border-[#e6eaf4] py-[15px] text-base last:border-b-0"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-green/10 text-[13px] font-bold text-green">
                  ✓
                </span>
                <span className="text-muted">
                  <b className="text-ink">{p.b}</b> {p.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl border border-line border-l-4 border-l-blue bg-white px-[22px] py-4 text-[15px] text-muted">
            <b className="text-ink">Граница гарантий — честно.</b> Strict mode
            закрывает штатный обход, случайную утечку и отключение «в один
            клик». Мы не обещаем магии против пользователя с полным root и
            неограниченным временем — поэтому публикуем модель угроз и приглашаем
            вашу red team проверить агент в пилоте.
          </p>
          <div className="mt-7">
            <BtnPrimary href="#pilot">Проверить в своём контуре</BtnPrimary>
          </div>
        </Reveal>
        <Reveal>
          <div
            className="rounded-card border border-line bg-white p-[26px] font-mono text-[13px] leading-[1.9] text-muted shadow-panel"
            aria-hidden="true"
          >
            $ guard policy verify
            <br />
            &nbsp;&nbsp;snapshot: corp-default <span className="text-green-deep">v12</span>
            <br />
            &nbsp;&nbsp;signature: <span className="text-green-deep">valid (ed25519)</span>
            <br />
            &nbsp;&nbsp;fingerprint:{" "}
            <span className="text-green-deep">9f4a…c1d7 — up to date</span>
            <br />
            <br />
            $ vi ~/.guard/policy.json&nbsp;
            <span className="text-amber"># попытка ручной правки</span>
            <br />
            <br />
            $ guard status
            <br />
            &nbsp;&nbsp;integrity:{" "}
            <span className="text-danger">FAILED — snapshot tampered</span>
            <br />
            &nbsp;&nbsp;mode: <span className="text-amber">strict fallback engaged</span>
            <br />
            &nbsp;&nbsp;event:{" "}
            <span className="text-green-deep">reported to control plane ✓</span>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
