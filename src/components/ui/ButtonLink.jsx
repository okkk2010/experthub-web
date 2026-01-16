import { Link } from "react-router-dom";
import { buttonClasses } from "./Button";

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return (
    <Link
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  );
}
