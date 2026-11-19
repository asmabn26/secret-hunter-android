export const RISK_LEVELS = {
  Low: {
    label: "Faible",
    color: "text-white",
    bg: "bg-risk-low",
    border: "border-risk-low",
    hex: "#047857",
  },
  Medium: {
    label: "Moyen",
    color: "text-white",
    bg: "bg-risk-medium",
    border: "border-risk-medium",
    hex: "#b45309",
  },
  High: {
    label: "Élevé",
    color: "text-white",
    bg: "bg-risk-high",
    border: "border-risk-high",
    hex: "#c2410c",
  },
  Critical: {
    label: "Critique",
    color: "text-white",
    bg: "bg-risk-critical",
    border: "border-risk-critical",
    hex: "#991b1b",
  },
};

const RISK_ALIASES = {
  low: "Low",
  faible: "Low",
  medium: "Medium",
  moyen: "Medium",
  high: "High",
  eleve: "High",
  critical: "Critical",
  critique: "Critical",
};

export const normalizeRisk = (risk) => {
  const value = String(risk || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");

  return RISK_ALIASES[value] || "Low";
};

export const getRiskConfig = (risk) => {
  return RISK_LEVELS[normalizeRisk(risk)];
};

export const getRiskScore = (score) => {
  if (score <= 30) return "Low";
  if (score <= 55) return "Medium";
  if (score <= 75) return "High";
  return "Critical";
};

export const RISK_CHART_COLORS = {
  Faible: RISK_LEVELS.Low.hex,
  Moyen: RISK_LEVELS.Medium.hex,
  "Élevé": RISK_LEVELS.High.hex,
  Critique: RISK_LEVELS.Critical.hex,
};
