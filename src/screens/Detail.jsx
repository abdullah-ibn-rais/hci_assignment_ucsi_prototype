import { C, GRAD, HALLS } from "../constants";
import Btn from "../components/Btn";
import { Badge, Divider, SecLabel } from "../components/Primitives";
import { Phone } from "../components/PhoneShell";

const FAC_ICON = { Projector:"📽️", Whiteboard:"🖊️", AC:"❄️", "Wi-Fi":"📶", Stage:"🎤", Microphone:"🎙️" };

const Detail = ({ hall = HALLS[0], go }) => (
  <Phone>
    <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
      {/* Hero */}
      <div style={{
        height: 160, background: GRAD,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 70, position: "relative",
        borderBottomLeftRadius: 24, borderBottomRightRadius: 24, flexShrink: 0,
      }}>
        {hall.emoji}
        <button onClick={() => go("results")} style={{
          position: "absolute", top: 44, left: 14,
          width: 34, height: 34, background: "rgba(255,255,255,.2)",
          border: "none", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", backdropFilter: "blur(8px)",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div style={{ position: "absolute", top: 46, right: 14 }}>
          <Badge type={hall.avail ? "green" : "gray"}>{hall.avail ? "✓ Available" : "Booked"}</Badge>
        </div>
      </div>

      <div style={{ padding: "14px 18px", flex: 1, background: "#f0f6fa" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 900, color: C.text }}>{hall.name}</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 3 }}>📍 {hall.loc} · {hall.cap} seats</div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, marginBottom: 12 }}>{hall.desc}</div>
        <Divider />
        <SecLabel>Facilities</SecLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
          {hall.fac.map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 28, height: 28, background: `${C[50]}88`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                {FAC_ICON[f] || "📱"}
              </div>
              <span style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{f}</span>
            </div>
          ))}
        </div>
        <Divider />
        <div style={{ background: "#fff", borderRadius: 14, padding: 12, border: `1px solid ${C.border}` }}>
          <SecLabel>Selected Slot</SecLabel>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Thu, 12 Mar 2026 · 2:00PM – 4:00PM</div>
        </div>
      </div>
    </div>

    <div style={{ padding: "10px 18px 16px", background: "#f0f6fa", flexShrink: 0 }}>
      {hall.avail
        ? <Btn onClick={() => go("confirm")}>Book This Hall</Btn>
        : <div style={{ background: "#e8e8e0", color: C.muted, fontSize: 14, fontWeight: 700, padding: 14, borderRadius: 14, textAlign: "center" }}>Hall Not Available</div>
      }
    </div>
  </Phone>
);

export default Detail;
