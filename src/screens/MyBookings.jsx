import { useState } from "react";
import { C, GRAD, BOOKINGS } from "../constants";
import { Badge, Card } from "../components/Primitives";
import { Phone, StatusBar, BottomNav, Scroll } from "../components/PhoneShell";

const STATUS_MAP   = { confirmed: "green", pending: "amber", done: "gray" };
const STATUS_LABEL = { confirmed: "✓ Confirmed", pending: "⏳ Pending", done: "Completed" };

const MyBookings = ({ go }) => {
  const [tab, setTab] = useState("upcoming");
  const upcoming = BOOKINGS.filter(b => b.status !== "done");
  const past      = BOOKINGS.filter(b => b.status === "done");
  const shown     = tab === "upcoming" ? upcoming : past;

  return (
    <Phone>
      <div style={{ background: GRAD, flexShrink: 0 }}>
        <StatusBar light />
        <div style={{ padding: "8px 20px 16px" }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>My Bookings</div>
          <div style={{ fontSize: 12, color: `${C[50]}cc`, marginTop: 3 }}>Manage your reservations</div>
        </div>
        <div style={{ display: "flex", margin: "0 20px 16px", background: "rgba(255,255,255,.12)", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,.15)" }}>
          {["upcoming", "past"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "9px 0",
              background: tab === t ? "rgba(255,255,255,.2)" : "transparent",
              border: "none", color: tab === t ? "#fff" : "rgba(255,255,255,.6)",
              fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
            }}>
              {t === "upcoming" ? "Upcoming" : "Past"}
            </button>
          ))}
        </div>
      </div>

      <Scroll style={{ padding: "12px 20px", background: "#f0f6fa" }}>
        {shown.map(b => (
          <Card key={b.id} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <Badge type={STATUS_MAP[b.status]}>{STATUS_LABEL[b.status]}</Badge>
              {b.status !== "done" && (
                <button style={{
                  background: b.status === "confirmed" ? C.red : "transparent",
                  color: b.status === "confirmed" ? "#fff" : C.red,
                  border: b.status === "confirmed" ? "none" : `1.5px solid ${C.red}`,
                  borderRadius: 10, padding: "4px 10px", fontSize: 10, fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit",
                }}>
                  Cancel
                </button>
              )}
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 3 }}>{b.hall}</div>
            <div style={{ fontSize: 11, color: C.muted }}>📅 {b.date} · {b.time}</div>
            <div style={{ fontSize: 10, color: C.subtle, marginTop: 4, fontFamily: "monospace" }}>{b.id}</div>
          </Card>
        ))}
      </Scroll>
      <BottomNav active="bookings" go={go}/>
    </Phone>
  );
};

export default MyBookings;
