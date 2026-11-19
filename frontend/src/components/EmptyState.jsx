import React from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud } from "lucide-react";

const EmptyState = ({
  title = "Aucune donnée disponible",
  description = "Lancez une analyse pour visualiser les résultats.",
  showAction = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
      <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center">
        <UploadCloud size={24} className="text-neutral-500" />
      </div>
      <div>
        <p className="text-neutral-300 font-medium">{title}</p>
        <p className="text-sm text-neutral-500 mt-1">{description}</p>
      </div>
      {showAction && (
        <button
          onClick={() => navigate("/upload")}
          className="mt-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-950/25 transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
        >
          Analyser un APK
        </button>
      )}
    </div>
  );
};

export default EmptyState;
