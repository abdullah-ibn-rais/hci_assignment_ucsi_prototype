import { C } from "../constants";

const Field = ({ label, placeholder, value, onChange, type = "text", icon, error, hint, style = {} }) => (
  <div style={{ marginBottom: 12, ...style }}>
    {label && (
      <div style={{
        fontSize: 11, fontWeight: 700,
        color: error ? C.red : C.muted,
        letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 6,
      }}>
        {label}
      </div>
    )}
    <div style={{
      background: "#fff", borderRadius: 12,
      border: `1.5px solid ${error ? C.red : value ? C[300] : C.border}`,
      padding: "10px 13px", display: "flex", alignItems: "center", gap: 9,
      transition: "border-color .2s",
      boxShadow: error
        ? "0 0 0 3px rgba(192,57,43,.1)"
        : value ? "0 0 0 3px rgba(1,79,134,.07)" : "none",
    }}>
      {icon && <span style={{ fontSize: 17, flexShrink: 0, lineHeight: 1 }}>{icon}</span>}
      <input
        type={type} value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1, border: "none", outline: "none",
          fontSize: 13, fontWeight: 600, color: C.text, background: "transparent",
        }}
      />
    </div>
    {error && (
      <div style={{ fontSize: 11, color: C.red, marginTop: 5, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
        ⚠ {error}
      </div>
    )}
    {hint && !error && (
      <div style={{ fontSize: 11, color: C.subtle, marginTop: 4 }}>{hint}</div>
    )}
  </div>
);

export default Field;
