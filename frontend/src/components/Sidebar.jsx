import { NavLink } from "react-router-dom";
import { Shield, LayoutDashboard, Upload, KeyRound, Network, Brain, FileText, Info, Smartphone } from "lucide-react";

const items = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Upload APK", path: "/upload", icon: Upload },
  { label: "Secrets", path: "/secrets", icon: KeyRound },
  { label: "Endpoints", path: "/endpoints", icon: Network },
  { label: "Analyse IA", path: "/ai-analysis", icon: Brain },
  { label: "Rapport", path: "/report", icon: FileText },
  { label: "À propos", path: "/about", icon: Info },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 border-r border-slate-300/80 bg-white/90 backdrop-blur-2xl lg:block">
      <div className="border-b border-slate-300/80 p-5">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-sm">
            <Shield className="h-6 w-6 text-white" />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-950">SecretHunter</h1>
            <p className="flex items-center gap-1 text-xs font-medium text-slate-700">
              <Smartphone className="h-3 w-3" />
              Android Security
            </p>
          </div>
        </NavLink>
      </div>

      <nav className="space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "border border-slate-800 bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                    : "font-medium text-slate-800 hover:bg-slate-200/80 hover:text-slate-950"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
