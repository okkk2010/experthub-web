import { cn } from "../../utils/cn";

export function PageShell({ className, children }) {
  return (
    <main className={cn("mx-auto w-full max-w-6xl px-6 py-10", className)}>
      {children}
    </main>
  );
}
