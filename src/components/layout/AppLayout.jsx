import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageShell } from "./PageShell";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <PageShell className="flex-1">
        <Outlet />
      </PageShell>
      <Footer />
    </div>
  );
}
