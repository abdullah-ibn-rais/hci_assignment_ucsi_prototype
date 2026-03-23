import { useState } from "react";
import { C, HALLS } from "../constants";
import Btn from "../components/Btn";
import { SecLabel, SumRow, Card } from "../components/Primitives";
import { Phone, StatusBar, TopBar } from "../components/PhoneShell";

const Confirm = ({ hall = HALLS[0], go }) => {
  const [agreed, setAgreed] = useState(false);
  const [note,   setNote]   = useState("");

  return (
    <Phone>
      <StatusBar />
      <TopBar title="Booking Confirmation" onBack={() => go("detail")}/>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 18px 10px", background: "#f0f6fa" }}>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: C.text }}>{hall.name}</div>
          <div style={{ fontSize: 12, color: C.muted }}>📍 {hall.loc}</div>
        </div>

        <SecLabel>Booking Summary</SecLabel>
        <Card style={{ marginBottom: 14 }}>
          <SumRow k="Hall"     v={hall.name}/>
          <SumRow k="Date"     v="Thu, 12 Mar 2026"/>
          <SumRow k="Time"     v="2:00PM – 4:00PM"/>
          <SumRow k="Duration" v="2 hours"/>
          <SumRow k="Capacity" v={`${hall.cap} seats`} last/>
        </Card>

        <SecLabel>Purpose / Notes</SecLabel>
        <textarea
          value={note} onChange={e => setNote(e.target.value)}
          placeholder="e.g. Programming Club Weekly Meeting..."
          style={{
            width: "100%", background: "#fff",
            border: `1.5px solid ${note ? C[300] : C.border}`,
            borderRadius: 13, padding: "10px 12px", fontSize: 13, color: C.text,
            minHeight: 52, resize: "none", outline: "none", fontFamily: "inherit",
            marginBottom: 14, lineHeight: 1.5, transition: "border-color .2s",
          }}
        />

        {/* Terms checkbox */}
        <div onClick={() => setAgreed(!agreed)} style={{
          display: "flex", alignItems: "flex-start", gap: 10,
          background: agreed ? `${C[50]}66` : "#fff",
          borderRadius: 14, padding: 12,
          border: `1.5px solid ${agreed ? C[200] : C.border}`,
          cursor: "pointer", marginBottom: 6, transition: "all .2s",
        }}>
          <div style={{
            width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
            background: agreed ? C[600] : "#fff",
            border: `2px solid ${agreed ? C[600] : C.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {agreed && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            )}
          </div>
          <span style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>
            I agree to the university hall booking terms and conditions. Cancellations must be made ≥24 hours in advance.
          </span>
        </div>
        {!agreed && <div style={{ fontSize: 11, color: C[400], marginBottom: 4 }}>ℹ Please accept terms to continue</div>}
      </div>

      <div style={{ padding: "8px 18px 16px", background: "#f0f6fa", flexShrink: 0 }}>
        <Btn onClick={() => go("success")} disabled={!agreed}>Confirm Booking</Btn>
      </div>
    </Phone>
  );
};

export default Confirm;
