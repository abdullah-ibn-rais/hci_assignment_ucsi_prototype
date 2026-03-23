import { C, GRAD } from "../constants";
import { SecLabel } from "../components/Primitives";
import { Phone, StatusBar, BottomNav, Scroll } from "../components/PhoneShell";

const MENU_ITEMS = [
  { icon: "👤", label: "My Profile", sub: "Edit personal information" },
  { icon: "📋", label: "My Bookings", sub: "View and manage reservations", action: "bookings" },
  { icon: "🔔", label: "Notifications", sub: "Manage alert preferences" },
  { icon: "🕐", label: "Booking History", sub: "Past reservations" },
  { icon: "📄", label: "Terms & Conditions", sub: "University booking policy" },
  { icon: "🆘", label: "Help & Support", sub: "FAQs and contact" },
];

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8aa8be" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Profile = ({ go }) => (
  <Phone>
    <div style={{ background: GRAD, flexShrink: 0 }}>
      <StatusBar light />
      <div style={{ padding: "8px 20px 22px", display: "flex", alignItems: "center", gap: 14 }}>


        <div style={{
          width: 52,
          height: 52,
          background: "#e3d3c8",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Changed from flex-end
          overflow: "hidden",
          border: "2.5px solid rgba(255,255,255,.3)"
        }}>
          <img
            src="/persona_hci.jpg" // Removed '/public'
            alt="photo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover" // This ensures the image fills the circle without stretching
            }}
          />
        </div>
        <div>
          <div style={{ fontSize: 11, color: `${C[50]}bb`, fontWeight: 500 }}>Good Afternoon</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: "#fff" }}>Abdullah Ibn Rais</div>
          <div style={{ fontSize: 10, color: `${C[50]}99` }}>CS/2024/0042 · Computer Science</div>
        </div>
      </div>
    </div>

    <Scroll style={{ padding: "12px 18px", background: "#f0f6fa" }}>
      {/* Stats */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {[["12", "Total Bookings"], ["8", "This Semester"], ["2", "Upcoming"]].map(([n, l]) => (
          <div key={l} style={{ flex: 1, background: "#fff", borderRadius: 14, padding: "10px 0", textAlign: "center", border: `1px solid ${C.border}` }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: C[600] }}>{n}</div>
            <div style={{ fontSize: 9, color: C.subtle, fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>

      <SecLabel>Account</SecLabel>
      {MENU_ITEMS.map(({ icon, label, sub, action }) => (
        <div key={label} onClick={() => action && go(action)} style={{
          background: "#fff", borderRadius: 14, padding: "11px 14px",
          display: "flex", alignItems: "center", gap: 10, marginBottom: 8,
          cursor: action ? "pointer" : "default", border: `1px solid ${C.border}`,
          boxShadow: "0 1px 4px rgba(0,0,0,.04)",
        }}>
          <div style={{ width: 36, height: 36, background: `${C[50]}88`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>
            {icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{label}</div>
            <div style={{ fontSize: 10, color: C.subtle, marginTop: 1 }}>{sub}</div>
          </div>
          <ChevronRight />
        </div>
      ))}

      <SecLabel style={{ marginTop: 10 }}>Settings</SecLabel>
      <div style={{ background: "#fff", borderRadius: 14, padding: "11px 14px", display: "flex", alignItems: "center", gap: 10, marginBottom: 8, border: `1px solid ${C.border}` }}>
        <div style={{ width: 36, height: 36, background: `${C[50]}88`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>⚙️</div>
        <span style={{ fontSize: 13, fontWeight: 700, color: C.text, flex: 1 }}>Time Format</span>
        <div style={{ background: `${C[50]}66`, borderRadius: 8, padding: "3px 4px", display: "flex", gap: 2 }}>
          <div style={{ background: C[600], color: "#fff", padding: "3px 9px", borderRadius: 6, fontSize: 10, fontWeight: 800 }}>12h</div>
          <div style={{ color: C.subtle, padding: "3px 9px", fontSize: 10, fontWeight: 600 }}>24h</div>
        </div>
      </div>

      <div onClick={() => go("splash")} style={{ background: C.redBg, border: `1.5px solid ${C.redBd}`, borderRadius: 16, padding: 14, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", marginTop: 4 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: C.red }}>Sign Out</span>
      </div>
    </Scroll>
    <BottomNav active="profile" go={go} />
  </Phone>
);

export default Profile;
