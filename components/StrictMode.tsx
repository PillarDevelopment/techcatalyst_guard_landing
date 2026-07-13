import { Wrap, Kicker, H2, BtnPrimary } from "./ui";
import Reveal from "./Reveal";

const points = [
  {
    b: "Подписанные политики.",
    text: "Каждый снапшот политики подписывается сервером и проверяется агентом локально.",
  },
  {
    b: "Контроль целостности.",
    text: "Ручное изменение настроек или политики обнаруживается — агент включает строгий резервный режим и сообщает событие в контур.",
  },
  {
    b: "Постоянная локальная защита.",
    text: "В строгом режиме агент и интеграции с командной оболочкой сохраняют активное состояние.",
  },
  {
    b: "Минимизация телеметрии.",
    text: "События содержат факты срабатываний, а исходные значения остаются на рабочей станции.",
  },
];

export default function StrictMode() {
  return (
    <section id="strict" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap className="grid grid-cols-2 items-center gap-14 max-md:grid-cols-1">
        <Reveal>
          <Kicker>Модель доверия</Kicker>
          <H2>Строгий режим: постоянная защита рабочей станции</H2>
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
            <b className="text-ink">Граница гарантий — честно.</b> Строгий режим
            закрывает штатный обход, случайную утечку и отключение «в один
            клик». Модель угроз отдельно фиксирует сценарии пользователя с
            полными правами администратора. Команда заказчика может проверить
            агент в ходе пробного внедрения и испытаний на проникновение.
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
            &nbsp;&nbsp;режим: <span className="text-amber">включён строгий резервный режим</span>
            <br />
            &nbsp;&nbsp;event:{" "}
            <span className="text-green-deep">reported to control plane ✓</span>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
