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

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[12px] font-semibold uppercase tracking-[.1em] text-blue">
      {children}
    </span>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-.025em] text-[#222] md:text-[44px]">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-[760px] text-[16px] leading-[1.6] text-muted md:text-[17px]">{children}</p>
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
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border border-blue bg-blue font-semibold text-white transition hover:-translate-y-px hover:bg-blue-bright ${
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#d6dcec] bg-white px-7 py-3 text-[15px] font-semibold text-ink transition hover:border-blue hover:text-blue"
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
      className={`rounded-[20px] border border-line bg-white p-6 sm:p-7 ${className}`}
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
