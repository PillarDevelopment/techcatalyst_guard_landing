import Link from "next/link";

export function Wrap({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1200px] px-6 max-sm:px-[18px] ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`mb-3 inline-flex font-mono text-[11px] uppercase tracking-[0.09em] text-blue ${className}`}
    >
      {children}
    </span>
  );
}

export function H2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
    return (
      <h2
        className={`mb-4 text-[clamp(34px,4vw,54px)] font-light leading-[1.08] tracking-[-0.019em] text-carbon ${className}`}
      >
        {children}
      </h2>
    );
}

export function Lead({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`max-w-[640px] text-[18px] leading-[1.55] text-slate ${className}`}>{children}</p>;
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
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-blue font-medium text-white transition-colors duration-200 hover:bg-blue-bright ${
        small
          ? "px-[16px] py-[10px] text-[13px]"
          : "px-[18px] py-[13px] text-[14px]"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-[8px] border border-silver bg-white px-[18px] py-[13px] text-[14px] font-medium text-carbon transition-colors duration-200 hover:border-blue hover:text-blue ${className}`}
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
    <div className={`rounded-card border border-silver bg-paper p-5 ${className}`}>
      {children}
    </div>
  );
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-[4px] bg-blue-soft px-1.5 py-px font-mono text-[12px] tracking-[0.08em] text-blue">
      {children}
    </code>
  );
}
