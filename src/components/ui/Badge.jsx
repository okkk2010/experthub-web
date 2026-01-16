import { cn } from "../../utils/cn";

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600",
        className
      )}
    >
      {children}
    </span>
  );
}
