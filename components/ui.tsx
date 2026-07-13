import Link from "next/link";

export function Wrap({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({
  children,
  className = "text-blue",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block font-mono text-[11.5px] font-semibold uppercase tracking-[0.16em] before:mr-2 before:content-['//'] ${className}`}
    >
      {children}
    </span>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-.025em] text-[#0d1326] md:text-[44px]">
      {children}
    </h2>
  );
}

export function Lead({
  children,
  className = "text-muted",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`mt-4 max-w-[760px] text-[16px] leading-[1.6] md:text-[17px] ${className}`}>
      {children}
    </p>
  );
}

export function BtnPrimary({
  href,
  children,
  small = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-blue bg-blue font-semibold text-white shadow-cta transition hover:-translate-y-px hover:border-blue-bright hover:bg-blue-bright ${
        small ? "px-5 py-2.5 text-[14px]" : "px-7 py-3 text-[15px]"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border px-7 py-3 text-[15px] font-semibold transition ${
        dark
          ? "border-navy-line bg-transparent text-[#e6eaff] hover:border-[#5468ff] hover:text-[#aab8ff]"
          : "border-[#c9d2ea] bg-white text-ink hover:border-blue hover:text-blue"
      }`}
    >
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-line bg-white p-6 shadow-card sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-[5px] bg-soft px-1.5 py-px font-mono text-[13px] text-blue">
      {children}
    </code>
  );
}
