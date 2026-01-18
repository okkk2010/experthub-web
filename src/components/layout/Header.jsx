import { Link, NavLink } from "react-router-dom";
import { ButtonLink } from "../ui/ButtonLink";
import { cn } from "../../utils/cn";

const navItems = [
  { label: "Categories", to: "/categories" },
  { label: "Questions", to: "/c/all/questions" },
  { label: "Experts", to: "/experts" },
  { label: "Appointments", to: "/my" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-slate-900">
          ExpertHub
        </Link>
        <nav className="flex flex-1 items-center gap-4 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-slate-100",
                  isActive && "bg-slate-900 text-white hover:bg-slate-900"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink to="/auth/login" variant="ghost" size="sm">
            Sign in
          </ButtonLink>
          <ButtonLink to="/auth/signup" size="sm">
            Sign up
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
