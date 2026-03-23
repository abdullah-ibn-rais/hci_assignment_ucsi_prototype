import { useState } from "react";
import { C } from "../constants";
import Btn from "../components/Btn";
import Field from "../components/Field";
import { Phone, StatusBar, TopBar, Scroll } from "../components/PhoneShell";

const Signup = ({ go }) => {
  const [name,  setName]  = useState("");
  const [sid,   setSid]   = useState("");
  const [email, setEmail] = useState("");
  const [pass,  setPass]  = useState("");
  const [conf,  setConf]  = useState("");

  const strength = pass.length === 0 ? 0 : pass.length < 6 ? 1 : pass.length < 10 ? 2 : /[^a-zA-Z0-9]/.test(pass) ? 4 : 3;
  const sColors  = ["#e0e0e0", "#e74c3c", "#e67e22", "#27ae60", "#1a7a4a"];
  const sLabels  = ["", "Weak", "Fair", "Strong", "Very Strong"];

  return (
    <Phone>
      <StatusBar />
      <TopBar title="Create Account" onBack={() => go("login")}/>

      {/* Progress steps */}
      <div style={{ display: "flex", gap: 6, padding: "0 20px 12px", flexShrink: 0 }}>
        {["Details", "Verify", "Done"].map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{ height: 4, borderRadius: 2, background: i === 0 ? C[600] : i === 1 ? C[100] : C.border }}/>
            <div style={{ fontSize: 9, marginTop: 3, color: i === 0 ? C[600] : C.subtle, fontWeight: 700 }}>{s}</div>
          </div>
        ))}
      </div>

      <Scroll pb={20} style={{ padding: "0 20px", background: "#f0f6fa" }}>
        <Field label="Full Name"   placeholder="Ahmad Faris"              value={name}  onChange={setName}  icon="👤"/>
        <Field label="Student ID"  placeholder="CS/2024/0042"             value={sid}   onChange={setSid}   icon="🎓"/>
        <Field label="Email"       placeholder="ahmad@university.edu"     value={email} onChange={setEmail} icon="✉️"/>
        <Field label="Password"    placeholder="Create a strong password" value={pass}  onChange={setPass}  type="password" icon="🔒"/>

        {pass.length > 0 && (
          <div style={{ marginBottom: 12, marginTop: -4 }}>
            <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{ flex: 1, height: 4, borderRadius: 2, background: n <= strength ? sColors[strength] : C.border, transition: "background .3s" }}/>
              ))}
            </div>
            <div style={{ fontSize: 11, color: sColors[strength], fontWeight: 600 }}>{sLabels[strength]}</div>
          </div>
        )}

        <Field label="Confirm Password" placeholder="Repeat password" value={conf}
          onChange={setConf} type="password" icon="🔒"
          error={conf && conf !== pass ? "Passwords do not match" : null}/>

        <Btn onClick={() => go("otp")} style={{ marginTop: 8 }}>Continue →</Btn>
      </Scroll>
    </Phone>
  );
};

export default Signup;
