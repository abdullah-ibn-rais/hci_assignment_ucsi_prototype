import { C } from "../constants";

export const Badge = ({ type, children }) => {
  const map = {
    green: { bg: C.greenBg,    color: C.green },
    red:   { bg: C.redBg,      color: C.red   },
    amber: { bg: C.amberBg,    color: C.amber },
    gray:  { bg: "#f0f4f8",    color: C.muted },
    blue:  { bg: `${C[50]}aa`, color: C[700]  },
  };
  const { bg, color } = map[type] || map.blue;
  return (
    <span style={{
      background: bg, color, fontSize: 10, fontWeight: 700,
      padding: "3px 9px", borderRadius: 99,
      display: "inline-flex", alignItems: "center", gap: 3, whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
};

export const Divider = ({ my = 10 }) => (
  <div style={{ borderTop: `1px solid ${C.border}`, margin: `${my}px 0` }} />
);

export const SecLabel = ({ children, style = {} }) => (
  <div style={{
    fontSize: 10, fontWeight: 700, color: C.subtle,
    letterSpacing: ".6px", textTransform: "uppercase", marginBottom: 8, ...style,
  }}>
    {children}
  </div>
);

export const SumRow = ({ k, v, last }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", padding: "7px 0",
    borderBottom: last ? "none" : `1px solid ${C.border}`, fontSize: 13,
  }}>
    <span style={{ color: C.muted }}>{k}</span>
    <span style={{ fontWeight: 700, color: C.text }}>{v}</span>
  </div>
);

export const Card = ({ children, style = {}, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: "#fff", borderRadius: 16, border: `1px solid ${C.border}`,
      padding: 14, cursor: onClick ? "pointer" : "default",
      transition: onClick ? "box-shadow .15s, transform .1s" : undefined,
      ...style,
    }}
  >
    {children}
  </div>
);
