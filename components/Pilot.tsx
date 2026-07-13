"use client";

import { FormEvent } from "react";
import { Wrap, Kicker, H2, Lead } from "./ui";
import Reveal from "./Reveal";

const includes = [
  "Развёртывание серверной части в контуре заказчика",
  "Подключение пробной группы рабочих станций",
  "Измерение качества детектирования на ваших репозиториях",
  "Критерии приёмки и границы гарантий фиксируем письменно до старта",
  "Архитектурная схема, расчёт ресурсов и требования к развёртыванию",
  "Технологическая самостоятельность: контур, данные и агенты остаются под вашим контролем",
];

const CONTACT = "info@2rm.ru";

export default function Pilot() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Имя: ${fd.get("name")}\nКомпания: ${fd.get("company")}\nE-mail: ${fd.get("email")}\n\n${fd.get("msg")}`
    );
    window.location.href = `mailto:${CONTACT}?subject=${encodeURIComponent(
      "Заявка на пробное внедрение TechCatalyst Guard"
    )}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-line bg-soft px-4 py-[13px] text-[15px] text-ink transition-colors focus:border-blue focus:bg-white focus:outline-none";

  return (
    <section id="pilot" className="border-y border-line bg-soft py-[82px] lg:py-[100px]">
      <Wrap className="grid grid-cols-2 gap-14 max-md:grid-cols-1">
        <Reveal>
          <Kicker>Пробное внедрение</Kicker>
          <H2>Проверьте на своих репозиториях и своём контуре</H2>
          <Lead>
            TechCatalyst Guard проходит стадию корпоративных пробных внедрений. Мы
            разворачиваем решение в вашей инфраструктуре и вместе измеряем
            результат на рабочем репозитории.
          </Lead>
          <ul className="mt-[22px]">
            {includes.map((it) => (
              <li
                key={it}
                className="relative py-2.5 pl-8 text-base text-muted before:absolute before:left-0 before:top-[9px] before:flex before:h-[22px] before:w-[22px] before:items-center before:justify-center before:rounded-full before:bg-green/10 before:text-xs before:font-bold before:text-green before:content-['✓']"
              >
                {it}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-panel border border-line bg-white p-9 shadow-card max-sm:rounded-card max-sm:p-5"
          >
            <div className="mb-4">
              <label htmlFor="f-name" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Имя
              </label>
              <input id="f-name" name="name" type="text" required autoComplete="name" placeholder="Иван Петров" className={field} />
            </div>
            <div className="mb-4">
              <label htmlFor="f-company" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Компания
              </label>
              <input id="f-company" name="company" type="text" required autoComplete="organization" placeholder="ООО «Компания»" className={field} />
            </div>
            <div className="mb-4">
              <label htmlFor="f-email" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Рабочий e-mail
              </label>
              <input id="f-email" name="email" type="email" required autoComplete="email" placeholder="name@company.ru" className={field} />
            </div>
            <div className="mb-4">
              <label htmlFor="f-msg" className="mb-[7px] block text-[13.5px] font-medium text-muted">
                Комментарий
              </label>
              <textarea id="f-msg" name="msg" placeholder="Размер команды разработки, интересующие сценарии…" className={`${field} min-h-[88px] resize-y`} />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-blue px-7 py-[15px] text-base font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta"
            >
              Запросить пробное внедрение
            </button>
            <p className="mt-3.5 text-center text-[13.5px] text-dim">
              Локальная архитектура: данные пробного внедрения остаются в вашей инфраструктуре
            </p>
            <p className="mt-2 text-center text-sm text-dim">
              или напишите нам:{" "}
              <a href={`mailto:${CONTACT}`} className="text-blue hover:underline">
                {CONTACT}
              </a>
            </p>
          </form>
        </Reveal>
      </Wrap>
    </section>
  );
}
