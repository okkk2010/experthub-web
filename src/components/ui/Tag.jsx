import { cn } from "../../utils/cn";

export function Tag({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600",
        className
      )}
    >
      {children}
    </span>
  );
}
