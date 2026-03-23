import { C } from "../constants";

/* ── STATUS BAR ── */
export const StatusBar = ({ light }) => {
  const col = light ? "rgba(255,255,255,.9)" : C[700];
  return (
    <div style={{
      height: 28, display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 18px",
      fontSize: 11, fontWeight: 700, color: col, flexShrink: 0, paddingTop: 8,
    }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
        <svg width="13" height="10" viewBox="0 0 15 11" fill={col}>
          <rect x=".5" y="4.2" width="3" height="6" rx=".5"/>
          <rect x="5.5" y="2.5" width="3" height="7.5" rx=".5"/>
          <rect x="10.5" y=".8" width="3" height="9.4" rx=".5"/>
        </svg>
        <svg width="13" height="11" viewBox="0 0 18 14" fill="none" stroke={col} strokeWidth="1.8">
          <path d="M1 4a12 12 0 0116 0"/>
          <path d="M4 8a7 7 0 0110 0"/>
          <path d="M7 12a3 3 0 014 0"/>
          <circle cx="9" cy="13.5" r="1" fill={col} stroke="none"/>
        </svg>
        <div style={{
          width: 19, height: 9, border: `1.5px solid ${col}`,
          borderRadius: 3, padding: "1px 1.5px", display: "flex", alignItems: "center",
        }}>
          <div style={{ height: "100%", width: "72%", background: col, borderRadius: 1.5 }} />
        </div>
      </div>
    </div>
  );
};

/* ── TOP BAR ── */
export const TopBar = ({ title, onBack, light, right }) => {
  const col = light ? "#fff" : C.text;
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "6px 16px 8px", flexShrink: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {onBack && (
          <button
            onClick={onBack}
            style={{
              background: light ? "rgba(255,255,255,.15)" : C.bg,
              border: "none", cursor: "pointer",
              width: 32, height: 32, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={col} strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
        )}
        <span style={{ fontSize: 15, fontWeight: 800, color: col }}>{title}</span>
      </div>
      {right}
    </div>
  );
};

/* ── BOTTOM NAV ── */
const NAV_ITEMS = [
  { key: "home",     label: "Home",          d: "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1z M9 21V12h6v9" },
  { key: "bookings", label: "My Bookings",   d: "M3 4h18v18H3z M16 2v4 M8 2v4 M3 10h18" },
  { key: "notifs",   label: "Notifications", d: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0", badge: 3 },
  { key: "profile",  label: "Profile",       d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 7a4 4 0 100 8 4 4 0 000-8z" },
];

export const BottomNav = ({ active, go }) => (
  <div style={{
    position: "absolute", bottom: 0, left: 0, right: 0, height: 68,
    background: "#fff", borderTop: `1px solid ${C.border}`,
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    display: "flex", justifyContent: "space-around", alignItems: "center",
    paddingBottom: 10, zIndex: 100,
    boxShadow: "0 -4px 20px rgba(1,42,74,.07)",
  }}>
    {NAV_ITEMS.map(({ key, label, d, badge }) => {
      const act = active === key;
      return (
        <button key={key} onClick={() => go(key)} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
          background: "none", border: "none", cursor: "pointer",
          color: act ? C[600] : C.subtle,
          fontSize: 9, fontWeight: 700, position: "relative",
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke={act ? C[600] : C.subtle}
            strokeWidth={act ? 2.2 : 1.8}
            strokeLinecap="round" strokeLinejoin="round"
          >
            {d.split(" M").map((p, i) => <path key={i} d={i === 0 ? p : "M" + p}/>)}
          </svg>
          {label}
          {act && <div style={{ width: 4, height: 4, background: C[600], borderRadius: "50%" }}/>}
          {badge && !act && (
            <div style={{
              position: "absolute", top: -2, right: 2,
              width: 14, height: 14, background: C.red, borderRadius: "50%",
              fontSize: 8, fontWeight: 800, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1.5px solid #fff",
            }}>
              {badge}
            </div>
          )}
        </button>
      );
    })}
  </div>
);

/* ── PHONE SHELL ── */
export const Phone = ({ children, bg = "#f0f6fa" }) => (
  <div style={{
    width: 340, height: 720,
    background: bg, borderRadius: 46,
    border: "10px solid #0a1520",
    position: "relative", overflow: "hidden",
    display: "flex", flexDirection: "column",
    boxShadow: "0 32px 64px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.04), 0 0 0 1px #0d1f2d",
    flexShrink: 0,
  }}>
    {/* Notch */}
    <div style={{
      position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
      width: 110, height: 26, background: "#0a1520",
      borderBottomLeftRadius: 16, borderBottomRightRadius: 16, zIndex: 200,
    }}/>
    {children}
  </div>
);

/* ── SCROLL AREA ── */
export const Scroll = ({ children, pb = 68, style = {} }) => (
  <div style={{ flex: 1, overflowY: "auto", paddingBottom: pb, ...style }}>
    {children}
  </div>
);
