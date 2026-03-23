import { useState } from "react";
import { C, HALLS } from "../constants";
import { Badge } from "../components/Primitives";
import { Phone, StatusBar, TopBar, Scroll } from "../components/PhoneShell";

const Results = ({ go, pickHall }) => {
  const [tab, setTab] = useState("available");
  const shown = tab === "available" ? HALLS.filter(h => h.avail) : HALLS.filter(h => !h.avail);

  return (
    <Phone>
      <StatusBar />
      <TopBar title="" onBack={() => go("search")}/>
      <div style={{ background: C[700], borderRadius: 18, margin: "0 14px 10px", padding: "10px 14px", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["Jan 15, 2026", "09:00–15:00", "50+ seats"].map(t => (
            <span key={t} style={{ background: "rgba(255,255,255,.2)", color: "#fff", fontSize: 10, fontWeight: 500, padding: "4px 10px", borderRadius: 20 }}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 20px 10px", flexShrink: 0 }}>
        <div style={{ display: "flex", border: `1.5px solid ${C.border}`, borderRadius: 99, overflow: "hidden" }}>
          {["available", "unavailable"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: tab === t ? C[600] : "transparent",
              color: tab === t ? "#fff" : C.muted,
              padding: "5px 14px", fontSize: 11, fontWeight: 700,
              border: "none", cursor: "pointer", fontFamily: "inherit",
            }}>
              {t === "available" ? "Available" : "Unavailable"}
            </button>
          ))}
        </div>
        <span style={{ fontSize: 11, color: C.subtle }}>{shown.length} found</span>
      </div>

      <Scroll style={{ padding: "0 20px", background: "#f0f6fa" }}>
        {shown.map(h => (
          <div key={h.id} onClick={() => h.avail && (pickHall(h), go("detail"))} style={{
            background: "#fff", borderRadius: 18, padding: 14, marginBottom: 10,
            display: "flex", gap: 12, cursor: h.avail ? "pointer" : "not-allowed",
            opacity: h.avail ? 1 : .55, border: `1px solid ${C.border}`,
            boxShadow: "0 2px 8px rgba(0,0,0,.04)",
          }}>
            <div style={{ width: 56, height: 50, borderRadius: 12, background: h.bg, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
              {h.emoji}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{h.name}</span>
                <Badge type={h.avail ? "green" : "gray"}>{h.avail ? "✓ Free" : "Booked"}</Badge>
              </div>
              <div style={{ fontSize: 11, color: C.muted, marginBottom: 7 }}>📍 {h.loc} · {h.cap} seats</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {h.fac.slice(0, 3).map(f => (
                  <span key={f} style={{ background: `${C[50]}88`, color: C[700], padding: "2px 7px", borderRadius: 7, fontSize: 10, fontWeight: 500 }}>{f}</span>
                ))}
              </div>
              {h.avail && <div style={{ fontSize: 11, color: C[500], fontWeight: 700, textAlign: "right", marginTop: 4 }}>Details →</div>}
            </div>
          </div>
        ))}
      </Scroll>
    </Phone>
  );
};

export default Results;
