// Browser shim for the design-system bundle: several components read
// process.env.NEXT_PUBLIC_* at module scope, and the IIFE bundle runs in a
// plain browser where `process` doesn't exist. Bundled first via
// cfg.extraEntries, so it evaluates before any component module.
const g = globalThis as unknown as { process?: { env: Record<string, string | undefined> } };
if (typeof g.process === "undefined") {
  g.process = { env: {} };
}
export const __envShim = true;
