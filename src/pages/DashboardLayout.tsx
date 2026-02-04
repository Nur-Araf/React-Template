import { NavLink, Outlet } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-4">
        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>

        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard">
            <Button variant="ghost" className="w-full justify-start">
              Home
            </Button>
          </NavLink>

          <NavLink to="/dashboard/settings">
            <Button variant="ghost" className="w-full justify-start">
              Settings
            </Button>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Card className="p-6">
          <Outlet />
        </Card>
      </main>
    </div>
  );
}
