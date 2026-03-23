import { useState, useRef } from "react";
import { C } from "../constants";
import Btn from "../components/Btn";
import { Phone, StatusBar, TopBar, Scroll } from "../components/PhoneShell";

const OTP = ({ go }) => {
  const [digits, setDigits] = useState(["6", "3", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  function handleKey(i, val) {
    if (!/^\d?$/.test(val)) return;
    const nd = [...digits]; nd[i] = val;
    setDigits(nd);
    if (val && i < 5) refs[i + 1].current?.focus();
  }

  const complete = digits.every(d => d !== "");

  return (
    <Phone>
      <StatusBar />
      <TopBar title="Verify Email" onBack={() => go("signup")}/>
      <Scroll pb={24} style={{ padding: "0 20px", background: "#f0f6fa" }}>
        <div style={{ textAlign: "center", padding: "16px 0 24px" }}>
          <div style={{
            width: 64, height: 64, background: `${C[50]}aa`, borderRadius: 20,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 30, margin: "0 auto 14px", border: `1.5px solid ${C[100]}`,
          }}>✉️</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 6 }}>Check your inbox</div>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
            We sent a 6-digit code to<br/>
            <strong style={{ color: C.text }}>ahmad.faris@university.edu</strong>
          </div>
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
          {digits.map((d, i) => (
            <input key={i} ref={refs[i]} maxLength={1} value={d}
              onChange={e => handleKey(i, e.target.value)}
              onKeyDown={e => {
                if (e.key === "Backspace" && !d && i > 0) {
                  refs[i - 1].current?.focus();
                  const nd = [...digits]; nd[i - 1] = ""; setDigits(nd);
                }
              }}
              style={{
                width: 44, height: 52, textAlign: "center",
                fontSize: 20, fontWeight: 800, color: C.text,
                border: `2px solid ${d ? C[500] : C.border}`,
                borderRadius: 12, background: d ? `${C[50]}55` : "#fff",
                outline: "none", caretColor: C[600],
                boxShadow: i === digits.findIndex(x => !x) ? "0 0 0 3px rgba(1,79,134,.15)" : "none",
              }}
            />
          ))}
        </div>

        <Btn onClick={() => go("home")} disabled={!complete} style={{ marginBottom: 14 }}>
          Verify &amp; Continue
        </Btn>
        <div style={{ textAlign: "center", fontSize: 12, color: C.muted }}>
          Didn't receive it?{" "}
          <span style={{ color: C[600], fontWeight: 700, cursor: "pointer" }}>Resend in 0:42</span>
        </div>
      </Scroll>
    </Phone>
  );
};

export default OTP;
