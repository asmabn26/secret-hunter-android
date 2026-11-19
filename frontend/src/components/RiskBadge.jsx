import React from "react";
import { getRiskConfig } from "../utils/riskUtils";

const RiskBadge = ({ risk, size = "sm" }) => {
  const config = getRiskConfig(risk);
  const sizeClass = size === "lg" ? "px-3 py-1 text-sm font-semibold" : "px-2.5 py-1 text-xs font-semibold";

  return (
    <span
      className={`inline-flex items-center rounded-full border ${config.bg} ${config.color} ${config.border} ${sizeClass} font-mono tracking-wide shadow-sm`}
    >
      {config.label}
    </span>
  );
};

export default RiskBadge;
