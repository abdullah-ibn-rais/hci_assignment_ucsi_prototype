import { C, GRAD, SCREENS, GROUPS, GROUP_COLORS } from "../constants";

const Sidebar = ({ screen, go }) => (
  <div style={{
    width: 220, flexShrink: 0,
    padding: "28px 0 28px 20px",
    borderRight: "1px solid rgba(255,255,255,.06)",
    overflowY: "auto",
    background: "rgba(0,0,0,.18)",
    display: "flex",
    flexDirection: "column",
  }}>
    {/* Logo */}
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28, paddingRight: 20 }}>
      <div style={{
        width: 34, height: 34, background: GRAD, borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
      }}>📋</div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>UniBook</div>
        <div style={{ fontSize: 9, color: `${C[50]}88`, fontWeight: 500 }}>Prototype v1.0</div>
      </div>
    </div>

    {/* Nav groups */}
    <div style={{ flex: 1 }}>
      {GROUPS.map(grp => (
        <div key={grp} style={{ marginBottom: 20 }}>
          <div style={{
            fontSize: 9, fontWeight: 800, color: `${C[50]}55`,
            letterSpacing: "1.2px", textTransform: "uppercase",
            marginBottom: 6, paddingRight: 20,
          }}>
            {grp}
          </div>
          {SCREENS.filter(s => s.group === grp).map(({ key, label }) => {
            const active = screen === key;
            return (
              <button key={key} onClick={() => go(key)} style={{
                width: "100%", textAlign: "left", padding: "8px 12px",
                borderRadius: "10px 0 0 10px",
                background: active ? "rgba(1,79,134,.35)" : "transparent",
                border: active ? "1px solid rgba(1,79,134,.4)" : "1px solid transparent",
                borderRight: active ? "none" : undefined,
                color: active ? "#fff" : `${C[50]}88`,
                fontSize: 12, fontWeight: active ? 700 : 500,
                cursor: "pointer", fontFamily: "inherit",
                display: "flex", alignItems: "center", gap: 8,
                marginBottom: 2, transition: "all .15s",
              }}>
                {active && (
                  <div style={{
                    width: 3, height: 14, background: GROUP_COLORS[grp],
                    borderRadius: 2, flexShrink: 0,
                  }}/>
                )}
                {label}
              </button>
            );
          })}
        </div>
      ))}
    </div>

    {/* Footer */}
    <div style={{ paddingRight: 20, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div style={{ fontSize: 9, color: `${C[50]}44`, lineHeight: 1.6 }}>
        BIC1233d · HCI Group Assignment<br/>January – April 2026
      </div>
    </div>
  </div>
);

export default Sidebar;
