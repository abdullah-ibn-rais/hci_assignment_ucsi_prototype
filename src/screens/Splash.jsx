import { C, GRAD } from "../constants";
import Btn from "../components/Btn";
import { Phone } from "../components/PhoneShell";

const Splash = ({ go }) => (
  <Phone bg={C[900]}>
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: GRAD, padding: "48px 28px 36px" }}>
      <div className="pi" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{
          width: 84, height: 84,
          background: "rgba(169,214,229,.12)", border: "1.5px solid rgba(169,214,229,.25)",
          borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 40, marginBottom: 20, backdropFilter: "blur(12px)",
        }}>📋</div>
        <div style={{ fontSize: 34, fontWeight: 900, color: "#fff", letterSpacing: "-.5px", marginBottom: 6 }}>UniBook</div>
        <div style={{ fontSize: 14, color: C[50], fontWeight: 500, lineHeight: 1.6, marginBottom: 8 }}>
          Campus Hall Booking System
        </div>
        <div style={{ fontSize: 12, color: `${C[50]}99`, marginBottom: 48 }}>
          University of Computer Science &amp; Digital Innovation
        </div>
        <svg width="200" height="90" viewBox="0 0 200 90" fill="none" style={{ opacity: .2, marginBottom: 48 }}>
          <rect x="10" y="20" width="50" height="60" rx="8" stroke={C[50]} strokeWidth="1.5"/>
          <rect x="75" y="8" width="50" height="72" rx="8" stroke={C[50]} strokeWidth="1.5"/>
          <rect x="140" y="30" width="50" height="50" rx="8" stroke={C[50]} strokeWidth="1.5"/>
          <line x1="60" y1="50" x2="75" y2="50" stroke={C[50]} strokeWidth="1.5"/>
          <line x1="125" y1="50" x2="140" y2="50" stroke={C[50]} strokeWidth="1.5"/>
          <circle cx="35" cy="12" r="4" fill={C[50]} opacity=".5"/>
          <circle cx="165" cy="22" r="3" fill={C[50]} opacity=".4"/>
        </svg>
      </div>
      <div className="fu" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Btn onClick={() => go("login")} variant="white">Get Started</Btn>
        <Btn onClick={() => go("login")} variant="outline"
          style={{ color: "rgba(255,255,255,.85)", borderColor: "rgba(255,255,255,.3)", background: "rgba(255,255,255,.08)" }}>
          Sign In to Existing Account
        </Btn>
      </div>
    </div>
  </Phone>
);

export default Splash;
