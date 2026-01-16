import { cn } from "../../utils/cn";

const variantStyles = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  error: "border-rose-200 bg-rose-50 text-rose-700",
  warning: "border-amber-200 bg-amber-50 text-amber-700",
};

export function Toast({ variant = "success", className, children }) {
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3 text-sm font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
