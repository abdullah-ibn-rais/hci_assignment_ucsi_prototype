import { C } from "../constants";
import Btn from "../components/Btn";
import { Phone, StatusBar, TopBar } from "../components/PhoneShell";

const NoResults = ({ go }) => (
  <Phone>
    <StatusBar />
    <TopBar title="" onBack={() => go("search")}/>
    <div style={{ background: C[700], borderRadius: 18, margin: "0 14px 10px", padding: "12px 14px", flexShrink: 0 }}>
      <div style={{ fontSize: 10, fontWeight: 700, color: `${C[50]}cc`, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 8 }}>
        Search Parameters
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {["Date: Jan 15, 2026", "Time: 09:00–11:00", "Time: 12:00–15:00", "Capacity: 50+"].map(t => (
          <span key={t} style={{ background: "rgba(255,255,255,.18)", color: "#fff", fontSize: 10, fontWeight: 500, padding: "4px 10px", borderRadius: 20 }}>{t}</span>
        ))}
      </div>
    </div>
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 28px 10px", background: "#f0f6fa" }}>
      <svg width="120" height="100" viewBox="0 0 120 100" fill="none" style={{ marginBottom: 20, opacity: .35 }}>
        <rect x="20" y="30" width="32" height="60" rx="4" stroke={C[600]} strokeWidth="2"/>
        <rect x="68" y="18" width="32" height="72" rx="4" stroke={C[600]} strokeWidth="2"/>
        <rect x="26" y="40" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="40" y="40" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="26" y="56" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="40" y="56" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="74" y="28" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="86" y="28" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="74" y="44" width="8" height="10" rx="2" fill={C[100]}/>
        <rect x="86" y="44" width="8" height="10" rx="2" fill={C[100]}/>
        <line x1="0" y1="90" x2="120" y2="90" stroke={C[200]} strokeWidth="1.5"/>
      </svg>
      <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 8, lineHeight: 1.35 }}>No Halls Available</div>
      <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 24 }}>
        No halls match your current criteria.<br/>Try a different date or time range.
      </div>
    </div>
    <div style={{ padding: "0 20px 28px", flexShrink: 0, background: "#f0f6fa" }}>
      <Btn onClick={() => go("search")} variant="outline">Modify Search</Btn>
    </div>
  </Phone>
);

export default NoResults;
