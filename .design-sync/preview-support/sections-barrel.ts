// Named re-exports for the section components (default exports): the
// design-system bundle's synthesized entry uses `export * from`, which does
// not forward default exports. Bundled via cfg.extraEntries so every section
// lands on window.<globalName> under its own name.
export { default as Assurance } from "../../components/Assurance";
export { default as Clients } from "../../components/Clients";
export { default as Deploy } from "../../components/Deploy";
export { default as Faq } from "../../components/Faq";
export { default as Features } from "../../components/Features";
export { default as Footer } from "../../components/Footer";
export { default as Header } from "../../components/Header";
export { default as Hero } from "../../components/Hero";
export { default as HowItWorks } from "../../components/HowItWorks";
export { default as LLMFirewall } from "../../components/LLMFirewall";
export { default as Pilot } from "../../components/Pilot";
export { default as Problem } from "../../components/Problem";
export { default as Reveal } from "../../components/Reveal";
export { default as Roles } from "../../components/Roles";
export { default as StrictMode } from "../../components/StrictMode";
export { default as Team } from "../../components/Team";
export { default as TerminalDemo } from "../../components/TerminalDemo";
