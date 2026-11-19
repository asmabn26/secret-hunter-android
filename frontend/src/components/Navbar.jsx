import { Link, useLocation } from "react-router-dom";
import { Plus, Server, ShieldCheck } from "lucide-react";

const titles = {
  "/": "Accueil",
  "/upload": "Upload APK",
  "/progress": "Progression",
  "/dashboard": "Dashboard",
  "/secrets": "Secrets détectés",
  "/endpoints": "Endpoints détectés",
  "/ai-analysis": "Analyse IA",
  "/report": "Rapport final",
  "/about": "À propos",
};

export default function Navbar() {
  const location = useLocation();
  const title = titles[location.pathname] || "SecretHunter Android";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-300/80 bg-white/86 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">Mobile App Security Lab</p>
          <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 md:flex">
            <ShieldCheck className="h-4 w-4 text-white" />
            Scanner actif
          </div>

          <div className="hidden items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 md:flex">
            <Server className="h-4 w-4 text-white" />
            Mode démo
          </div>

          <Link to="/upload" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/25 transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">
            <Plus className="h-4 w-4" />
            Nouvelle analyse
          </Link>
        </div>
      </div>
    </header>
  );
}
