"use client";

import { useEffect, useRef } from "react";

type Line =
  | { t: "cmd"; text: string }
  | { t: "status"; text: string }
  | { t: "gap" }
  | { t: "out"; text: string; secret: string; mask: string; tail: string };

const SCRIPT: Line[] = [
  { t: "cmd", text: "cat .env" },
  {
    t: "out",
    text: "DATABASE_URL=postgres://prod:",
    secret: "S3cr3t!9pwd",
    mask: "[MASKED:DB_PASSWORD]",
    tail: "@db.internal:5432/payments",
  },
  {
    t: "out",
    text: "AWS_ACCESS_KEY_ID=",
    secret: "AKIAIOSFODNN7EXAMPLE",
    mask: "[MASKED:AWS_KEY]",
    tail: "",
  },
  {
    t: "out",
    text: "STRIPE_SECRET_KEY=",
    secret: "sk_live_fake_fake",
    mask: "[MASKED:STRIPE_KEY]",
    tail: "",
  },
  {
    t: "status",
    text: "▲ guard: 3 секрета замаскированы · policy corp-default v12 · событие отправлено",
  },
  { t: "gap" },
  { t: "cmd", text: "tail -n2 users.log" },
  {
    t: "out",
    text: "login ok · ",
    secret: "ivanov@corp.ru",
    mask: "[MASKED:EMAIL]",
    tail: " · ip 10.2.14.8",
  },
  {
    t: "out",
    text: "payment · card ",
    secret: "4276 8312 0044 9921",
    mask: "[MASKED:PAN]",
    tail: " · status=ok",
  },
  {
    t: "status",
    text: "▲ guard: PII замаскированы в потоке вывода · mode=strict",
  },
];

const CARET = '<span class="t-caret"></span>';
const PROMPT = '<span class="t-prompt">~/payments-service $</span> ';

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

export default function TerminalDemo() {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = bodyRef.current;
    if (!term) return;

    let li = 0;
    let ci = 0;
    let lineEl: HTMLDivElement | null = null;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const later = (fn: () => void, ms: number) => {
      if (cancelled) return;
      timers.push(setTimeout(() => !cancelled && fn(), ms));
    };

    const newLine = (html: string) => {
      const d = document.createElement("div");
      d.innerHTML = html;
      term.appendChild(d);
      return d;
    };

    const step = () => {
      if (li >= SCRIPT.length) {
        later(() => {
          term.innerHTML = "";
          li = 0;
          ci = 0;
          step();
        }, 3800);
        return;
      }
      const L = SCRIPT[li];
      if (L.t === "gap") {
        newLine("&nbsp;");
        li++;
        later(step, 300);
        return;
      }
      if (L.t === "cmd") {
        if (ci === 0) lineEl = newLine(PROMPT + CARET);
        if (ci < L.text.length) {
          ci++;
          lineEl!.innerHTML =
            PROMPT + '<span class="t-cmd">' + esc(L.text.slice(0, ci)) + "</span>" + CARET;
          later(step, 55 + Math.random() * 60);
        } else {
          lineEl!.innerHTML = PROMPT + '<span class="t-cmd">' + esc(L.text) + "</span>";
          ci = 0;
          li++;
          later(step, 420);
        }
        return;
      }
      if (L.t === "status") {
        newLine('<span class="t-status">' + esc(L.text) + "</span>");
        li++;
        later(step, 900);
        return;
      }
      const el = newLine(
        '<span class="t-out">' + esc(L.text) + '</span><span class="t-secret">' +
          esc(L.secret) + '</span><span class="t-out">' + esc(L.tail) + "</span>"
      );
      later(() => {
        el.innerHTML =
          '<span class="t-out">' + esc(L.text) + '</span><span class="t-masked">' +
          esc(L.mask) + '</span><span class="t-out">' + esc(L.tail) + "</span>";
      }, 650);
      li++;
      later(step, 260);
    };

    step();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      term.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="overflow-hidden rounded-card border border-line bg-white shadow-panel font-mono text-[13.5px] leading-[1.75]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-line bg-soft px-4 py-3">
        <i className="block h-[11px] w-[11px] rounded-full bg-[#f1645a]" />
        <i className="block h-[11px] w-[11px] rounded-full bg-[#f5b73d]" />
        <i className="block h-[11px] w-[11px] rounded-full bg-[#35c84a]" />
        <span className="ml-2 text-xs text-dim">защищённый терминал — агент Guard v1.0</span>
      </div>
      <div
        ref={bodyRef}
        className="min-h-[340px] whitespace-pre-wrap break-all p-[18px] pb-[22px] text-muted max-md:min-h-[260px] max-md:text-xs"
      />
    </div>
  );
}
