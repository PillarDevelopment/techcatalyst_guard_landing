# TechCatalyst Guard UI — конвенции для сборки

Дизайн-система лендинга TechCatalyst Guard: «инженерный премиум» — светлые секции + тёмные navy-акценты (hero, шапка, футер, терминал). Язык контента — русский.

## Обёртка и настройка

Провайдер не нужен: компоненты самодостаточны, стили приходят из `styles.css`. Страницу собирайте на белом фоне; `Header`, `Hero`, `Footer` и `TerminalDemo` — тёмные (navy) по дизайну и сами несут свой фон. Секции кладите подряд без обёрток; внутри собственных секций ограничивайте контент компонентом `Wrap` (контейнер max-w 1180px с адаптивными отступами). `Reveal` показывает содержимое только когда блок попал во вьюпорт — не оборачивайте в него контент первого экрана.

## Идиома стилей — Tailwind-утилиты, но только проверенный словарь

`styles.css` — **скомпилированный поднабор** Tailwind: гарантированно есть только классы, уже используемые компонентами. Не изобретайте произвольные утилиты (например, `bg-blue-tint` или `grid-cols-5` могут отсутствовать) — для собственной верстки-склейки используйте перечисленные ниже семейства, а чего не хватает — inline-style.

| Семейство | Классы |
|---|---|
| Бренд | `bg-blue` `text-blue` `border-blue` (#2b46f0), hover-тон `bg-blue-bright` (#1c33d4), заливка `bg-blue-soft` |
| Текст | `text-ink` (основной #232a42), `text-muted` (#565e78), `text-dim` (#8d93ab); заголовки — `text-[#0d1326]` |
| Тёмные поверхности | `bg-navy-950` `bg-navy-900` `bg-navy-800`, рамка `border-navy-line`, текст `text-navy-text` |
| Фоны/рамки | `bg-soft` (#f6f8fc), `border-line` (#e4e8f4), `border-line-strong` (#c9d2ea) |
| Статусы | `text-green` `text-green-deep` `text-amber` `text-danger` |
| Тени | `shadow-card` (карточки), `shadow-panel` (панели), `shadow-cta` (первичные кнопки) |
| Радиусы | `rounded-card` (14px), `rounded-panel` (18px), кнопки — `rounded-[10px]` |
| Шрифты | `font-sans` (Inter), `font-mono` (JetBrains Mono — киккеры, код, числа) |
| Паттерны | `bg-grid-light` / `bg-grid-dark` — инженерная сетка 44px для hero-фонов (absolute-слой) |

Kicker сам добавляет префикс `//` и mono-каппс; не дублируйте их вручную.

## Где правда

Прочитайте перед вёрсткой: `_ds/<папка>/styles.css` и импортируемый им `_ds_bundle.css` (все реально существующие классы и токены), `fonts/fonts.css` (Inter + JetBrains Mono зашиты). API каждого компонента — `components/general/<Name>/<Name>.d.ts`, использование — `<Name>.prompt.md`.

## Идиоматичный скелет секции

```tsx
import { Wrap, Kicker, H2, Lead, Card, BtnPrimary } from "sai-landing";

<section className="border-t border-line bg-soft py-16">
  <Wrap>
    <Kicker>Возможности</Kicker>
    <H2>Один агент — все каналы утечки</H2>
    <Lead>Терминал, MCP и буфер обмена под управлением корпоративных политик.</Lead>
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      <Card>
        <h4 className="text-[19px] font-semibold text-[#0d1326]">Защита терминала</h4>
        <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">
          Потоковое маскирование секретов до передачи ИИ-агенту.
        </p>
      </Card>
    </div>
    <BtnPrimary href="#pilot" className="mt-8">Запросить пробное внедрение</BtnPrimary>
  </Wrap>
</section>
```

Кнопки — `BtnPrimary` / `BtnGhost` (у ghost есть проп `dark` для тёмных поверхностей); не собирайте кнопки из голых `<a>`.
