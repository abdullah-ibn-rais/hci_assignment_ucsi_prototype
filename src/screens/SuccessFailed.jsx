import { C } from "../constants";
import Btn from "../components/Btn";
import { SecLabel, SumRow, Card } from "../components/Primitives";
import { Phone, StatusBar } from "../components/PhoneShell";

export const Success = ({ go }) => (
  <Phone>
    <StatusBar />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px 24px 0", textAlign: "center", background: "#f0f6fa" }}>
      <div className="pi" style={{ fontSize: 52, marginBottom: 10 }}>🎉</div>
      <div className="pi" style={{
        width: 60, height: 60, background: C.greenBg, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 16px", border: "2px solid #a8dfc0",
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div style={{ fontSize: 21, fontWeight: 900, color: C.text, marginBottom: 4 }}>Booking Confirmed!</div>

      <div style={{ width: "100%", background: "#fff", borderRadius: 16, padding: "12px 14px", border: `1.5px solid ${C[100]}`, marginBottom: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.subtle, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 5 }}>
          Booking Reference
        </div>
        <div style={{ fontSize: 20, fontWeight: 900, color: C[600], fontFamily: "monospace", letterSpacing: "2px" }}>
          BK2026001
        </div>
      </div>

      <div style={{ width: "100%", background: C.greenBg, borderRadius: 14, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, textAlign: "left", border: "1px solid #a8dfc0", marginBottom: 18 }}>
        <div style={{ width: 36, height: 36, background: C.green, borderRadius: 10, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Confirmation sent</div>
          <div style={{ fontSize: 11, color: C.muted }}>Push notification delivered</div>
        </div>
      </div>
    </div>
    <div style={{ padding: "8px 22px 22px", background: "#f0f6fa", flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      <Btn onClick={() => go("home")}>Back to Home</Btn>
      <Btn onClick={() => go("bookings")} variant="ghost">View My Bookings</Btn>
    </div>
  </Phone>
);

export const Failed = ({ go }) => (
  <Phone>
    <StatusBar />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 24px 0", textAlign: "center", background: "#f0f6fa" }}>
      <div style={{ width: 72, height: 72, background: C.redBg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, border: `2px solid ${C.redBd}` }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={C.red} strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      </div>
      <div style={{ fontSize: 20, fontWeight: 800, color: C.text, marginBottom: 8 }}>Booking Failed</div>
      <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 18 }}>
        There was a temporary server problem.<br/>Your payment was not charged.
      </div>
      <Card style={{ width: "100%", textAlign: "left", marginBottom: 20 }}>
        <SecLabel>Summary</SecLabel>
        <SumRow k="Hall" v="Seminar Room 2"/>
        <SumRow k="Date" v="Thu, 12 Mar 2026"/>
        <SumRow k="Time" v="2:00PM – 4:00PM" last/>
      </Card>
    </div>
    <div style={{ padding: "0 22px 22px", background: "#f0f6fa", flexShrink: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      <Btn onClick={() => go("confirm")}>Retry Booking</Btn>
      <Btn onClick={() => go("search")} variant="outline">Back to Search</Btn>
    </div>
  </Phone>
);
