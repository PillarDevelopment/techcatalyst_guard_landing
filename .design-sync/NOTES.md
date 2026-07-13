# design-sync NOTES — techcatalyst_guard_landing

- Репо — Next.js-приложение, а не библиотека: сборки dist нет. `cfg.entry` указывает на несуществующий `./dist/index.js` **намеренно** — soft-miss включает синтез entry из `components/` (cfg.srcDir), а walk-up от этого пути находит package.json репо. Не «чинить».
- `cfg.cssEntry` (`.design-sync/styles.compiled.css`) — генерируется; **перед каждым `package-build.mjs` запускать `cfg.buildCmd`** (tailwind CLI компилирует классы из components/ + app/ + .design-sync/previews/). Файл в .gitignore — на свежем клоне обязателен buildCmd.
- `extraEntries`:
  - `env-shim.ts` — компоненты читают `process.env.NEXT_PUBLIC_*` на уровне модуля; без шима IIFE-бандл падает `process is not defined` и на window ничего не попадает.
  - `sections-barrel.ts` — 17 секций экспортируются `export default`; синтезированный entry (`export * from`) default'ы не пробрасывает. Новую секцию с default-экспортом надо добавить в баррель.
- Форк `.design-sync/overrides/dts.mjs`: `H2` попадает под ALL_CAPS-фильтр `isComponentName`; форк разрешает `H1`–`H6`. Симлинк `.design-sync/node_modules -> ../.ds-sync/node_modules` пересоздавать на свежем клоне (`ln -sfn`).
- Playwright: кеш macOS `~/Library/Caches/ms-playwright` содержит chromium-1187 → в `.ds-sync` ставится `playwright@1.55.0` (pin build 1187). Свежий playwright требует 1228 и упадёт.
- Шрифты Inter (variable, rsms.me) и JetBrains Mono (static 400/500/600/700, репо JetBrains) скачаны в `.design-sync/preview-support/fonts/` с согласия пользователя (оба OFL); подключены через `extraFonts` → fonts.css.

## Known render warns
- `[EXPORT_COLLISION]` на sections-barrel.ts — ожидаемо и безвредно: основной entry реально НЕ экспортирует эти имена (default'ы не пробрасываются `export *`), рендерится именно баррель-биндинг. Проверено: все 25 компонентов на window, 25/25 рендер чистый.

## Находки для владельца
- `components/Clients.tsx`: лид-текст секции содержит служебную фразу («В `artifacts` проекта уже лежит справка об опыте…») — похоже на оставшийся черновик/инструкцию в продакшн-копии. Сообщено пользователю 2026-07-13.

## Re-sync risks
- `styles.compiled.css` не в git — любой прогон без предварительного buildCmd соберёт бандл со старым/пустым CSS (валидатор поймает `[CSS_IMPORT_MISSING]`, но лучше не доводить).
- Превью импортируют из `"sai-landing"` (имя пакета в package.json); переименование пакета сломает все превью.
- Reveal-превью зависит от срабатывания IntersectionObserver в headless — если скриншот поймает opacity-переход, появится ложный blank.
- Обновление playwright в .ds-sync без обновления кеша браузеров сломает рендер-чек (см. пин выше).
- Все 25 компонентов имеют авторские превью в `.design-sync/previews/` (committed); floor-карточек нет.
