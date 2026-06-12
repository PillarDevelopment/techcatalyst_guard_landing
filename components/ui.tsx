import Link from "next/link";

export function Wrap({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-[1140px] px-6 max-sm:px-[18px] ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3.5 block text-[13px] font-semibold uppercase tracking-[.12em] text-blue">
      {children}
    </span>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3.5 text-[clamp(27px,3.4vw,40px)] font-semibold leading-[1.18] tracking-[-.015em] text-[#222]">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[660px] text-[clamp(16px,1.6vw,19px)] text-muted">{children}</p>
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
      className={`inline-block whitespace-nowrap rounded-full bg-blue font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-blue-bright hover:shadow-cta ${
        small ? "px-[22px] py-2.5 text-[14.5px] max-sm:px-3.5 max-sm:py-2 max-sm:text-[13px]" : "px-7 py-[13px] text-[15.5px]"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

export function BtnGhost({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block whitespace-nowrap rounded-full border border-[#d6dcec] bg-white px-7 py-[13px] text-[15.5px] font-semibold text-ink transition-all duration-200 hover:border-blue hover:text-blue"
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
      className={`rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-card ${className}`}
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
