import { C } from "../constants";

const Btn = ({ children, onClick, variant = "primary", disabled, style = {} }) => {
  const base = {
    width: "100%", padding: "13px 18px", borderRadius: 13, fontSize: 14,
    fontWeight: 700, border: "none", cursor: disabled ? "not-allowed" : "pointer",
    transition: "all .15s", display: "flex", alignItems: "center",
    justifyContent: "center", gap: 6,
  };
  const variants = {
    primary: {
      background: disabled ? "#c8d8e4" : C[600],
      color: disabled ? "#8aa8be" : "#fff",
      boxShadow: disabled ? "none" : "0 4px 14px rgba(1,79,134,.28)",
    },
    outline: { background: "transparent", color: C[600], border: `2px solid ${C[600]}` },
    ghost:   { background: C.bg, color: C.muted, border: `1.5px solid ${C.border}` },
    danger:  {
      background: disabled ? "#f5ccc8" : C.red, color: "#fff",
      boxShadow: disabled ? "none" : "0 4px 14px rgba(192,57,43,.22)",
    },
    white: { background: "#fff", color: C[700], boxShadow: "0 4px 16px rgba(0,0,0,.1)" },
  };

  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  );
};

export default Btn;
