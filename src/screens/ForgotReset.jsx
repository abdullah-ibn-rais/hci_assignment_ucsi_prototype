import { useState } from "react";
import { C } from "../constants";
import Btn from "../components/Btn";
import Field from "../components/Field";
import { Phone, StatusBar, TopBar, Scroll } from "../components/PhoneShell";

export const Forgot = ({ go }) => {
  const [email, setEmail] = useState("");
  const [sent,  setSent]  = useState(false);

  if (sent) return (
    <Phone>
      <StatusBar />
      <TopBar title="Check Your Email" onBack={() => go("login")}/>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 28px 20px", textAlign: "center", background: "#f0f6fa" }}>
        <div className="pi" style={{ fontSize: 56, marginBottom: 16 }}>📬</div>
        <div style={{ fontSize: 18, fontWeight: 800, color: C.text, marginBottom: 8 }}>Reset link sent!</div>
        <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.7, marginBottom: 28 }}>
          We've sent a password reset link to<br/><strong style={{ color: C.text }}>{email}</strong>
        </div>
        <Btn onClick={() => go("reset")} style={{ marginBottom: 10 }}>Open Reset Link</Btn>
        <Btn onClick={() => go("login")} variant="ghost">Back to Sign In</Btn>
      </div>
    </Phone>
  );

  return (
    <Phone>
      <StatusBar />
      <TopBar title="Reset Password" onBack={() => go("login")}/>
      <Scroll pb={24} style={{ padding: "0 20px", background: "#f0f6fa" }}>
        <div style={{ textAlign: "center", padding: "20px 0 28px" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🔑</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 6 }}>Forgot your password?</div>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
            Enter your registered email and we'll send you a reset link.
          </div>
        </div>
        <Field label="Email address" placeholder="your@university.edu" value={email} onChange={setEmail} icon="✉️"/>
        <Btn onClick={() => email && setSent(true)} disabled={!email} style={{ marginTop: 8, marginBottom: 12 }}>
          Send Reset Link
        </Btn>
        <Btn onClick={() => go("login")} variant="ghost">Back to Sign In</Btn>
      </Scroll>
    </Phone>
  );
};

export const ResetPass = ({ go }) => {
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  return (
    <Phone>
      <StatusBar />
      <TopBar title="New Password" onBack={() => go("forgot")}/>
      <Scroll pb={24} style={{ padding: "0 20px", background: "#f0f6fa" }}>
        <div style={{ textAlign: "center", padding: "16px 0 24px" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🛡️</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 4 }}>Create new password</div>
          <div style={{ fontSize: 13, color: C.muted }}>Must be at least 8 characters</div>
        </div>
        <Field label="New Password"     placeholder="Enter new password"  value={p1} onChange={setP1} type="password" icon="🔒"/>
        <Field label="Confirm Password" placeholder="Repeat new password" value={p2} onChange={setP2} type="password" icon="🔒"
          error={p2 && p1 !== p2 ? "Passwords do not match" : null}/>
        <Btn onClick={() => go("login")} disabled={!p1 || !p2 || p1 !== p2} style={{ marginTop: 8 }}>
          Update Password
        </Btn>
      </Scroll>
    </Phone>
  );
};
