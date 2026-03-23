import { useState } from "react";
import { C, GRAD, VALID_EMAIL, VALID_PASSWORD } from "../constants";
import Btn from "../components/Btn";
import Field from "../components/Field";
import { Phone, StatusBar, Scroll } from "../components/PhoneShell";

const Login = ({ go }) => {
  const [email,   setEmail]   = useState("");
  const [pass,    setPass]    = useState("");
  const [err,     setErr]     = useState({});
  const [loading, setLoading] = useState(false);

  function submit() {
    const e = {};
    if (!email.trim())           e.email = "Email address is required";
    else if (!email.includes("@")) e.email = "Please enter a valid email address";
    if (!pass.trim())            e.pass  = "Password is required";
    if (Object.keys(e).length) { setErr(e); return; }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email.trim() === VALID_EMAIL && pass === VALID_PASSWORD) {
        go("home");
      } else {
        setErr({
          email: email.trim() !== VALID_EMAIL ? "No account found with this email" : null,
          pass:  pass !== VALID_PASSWORD ? "Incorrect password. Please try again." : null,
        });
      }
    }, 800);
  }

  return (
    <Phone>
      <StatusBar />
      <Scroll pb={24} style={{ background: "#f0f6fa" }}>
        <div style={{ background: GRAD, padding: "16px 20px 28px", borderBottomLeftRadius: 28, borderBottomRightRadius: 28, marginBottom: 20 }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 4 }}>Welcome Back 👋</div>
          <div style={{ fontSize: 13, color: `${C[50]}cc` }}>Sign in to your student account</div>
        </div>

        <div style={{ padding: "0 20px" }}>
          {/* Demo hint */}
          <div style={{
            background: `${C[50]}55`, border: `1px solid ${C[100]}`,
            borderRadius: 12, padding: "10px 14px", marginBottom: 16,
            display: "flex", gap: 8, alignItems: "flex-start",
          }}>
            <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
            <div style={{ fontSize: 11, color: C[700], lineHeight: 1.5 }}>
              <strong>Demo credentials:</strong><br/>
              Email: <code style={{ background: "rgba(1,79,134,.1)", padding: "1px 5px", borderRadius: 4 }}>abdullah@yahoo.com</code><br/>
              Password: <code style={{ background: "rgba(1,79,134,.1)", padding: "1px 5px", borderRadius: 4 }}>unibook123</code>
            </div>
          </div>

          <Field label="Student Email" placeholder="your@university.edu" value={email}
            onChange={setEmail} icon="✉️" error={err.email}/>
          <Field label="Password" placeholder="Enter your password" value={pass}
            onChange={setPass} type="password" icon="🔒" error={err.pass}/>

          <div style={{ textAlign: "right", marginBottom: 18 }}>
            <span onClick={() => go("forgot")} style={{ fontSize: 12, fontWeight: 600, color: C[500], cursor: "pointer" }}>
              Forgot password?
            </span>
          </div>

          <Btn onClick={submit} disabled={loading} style={{ marginBottom: 14 }}>
            {loading ? "Signing in…" : "Sign In"}
          </Btn>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ flex: 1, height: 1, background: C.border }}/>
            <span style={{ fontSize: 11, color: C.subtle }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: C.border }}/>
          </div>

          <button onClick={() => go("home")} style={{
            background: "#fff", border: `1.5px solid ${C.border}`, borderRadius: 13,
            padding: "11px 16px", width: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 10, fontSize: 13, fontWeight: 600, color: C.text, cursor: "pointer",
          }}>
            <span style={{ fontSize: 18 }}>🏫</span> Student Portal SSO
          </button>

          <div style={{ textAlign: "center", fontSize: 12, color: C.muted, marginTop: 16 }}>
            New here?{" "}
            <span onClick={() => go("signup")} style={{ color: C[600], fontWeight: 700, cursor: "pointer" }}>
              Create account
            </span>
          </div>
        </div>
      </Scroll>
    </Phone>
  );
};

export default Login;
