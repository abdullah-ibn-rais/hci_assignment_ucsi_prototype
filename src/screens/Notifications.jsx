import { C, GRAD, NOTIFS } from "../constants";
import { SecLabel, Divider } from "../components/Primitives";
import { Phone, StatusBar, BottomNav, Scroll } from "../components/PhoneShell";

const TYPE_STYLE = {
  confirmed: { bg: `#a9d6e588`, color: "#01497c", icon: "✅" },
  reminder:  { bg: "#fef8ec",   color: "#9a6020",  icon: "⏰" },
  cancelled: { bg: "#fdf0ef",   color: "#c0392b",  icon: "❌" },
  available: { bg: "#eaf7f0",   color: "#1a7a4a",  icon: "🏛" },
  info:      { bg: "#f0f4f8",   color: "#4a6a80",  icon: "ℹ️" },
};

const Notifications = ({ go }) => {
  const unread = NOTIFS.filter(n => n.unread);
  const read   = NOTIFS.filter(n => !n.unread);

  return (
    <Phone>
      <div style={{ background: GRAD, flexShrink: 0 }}>
        <StatusBar light />
        <div style={{ padding: "8px 20px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: `${C[50]}cc`, fontWeight: 500, marginBottom: 2 }}>Notifications</div>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>Alerts</div>
          </div>
          <button style={{ background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)", borderRadius: 10, padding: "6px 12px", fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,.9)", cursor: "pointer", fontFamily: "inherit" }}>
            Mark all read
          </button>
        </div>
      </div>

      <Scroll style={{ padding: "10px 20px", background: "#f0f6fa" }}>
        <SecLabel>Today — {unread.length} unread</SecLabel>
        {unread.map(n => {
          const s = TYPE_STYLE[n.type];
          return (
            <div key={n.id} style={{
              background: "#fff", borderRadius: 18, padding: 14, marginBottom: 10,
              display: "flex", gap: 10,
              borderLeft: `4px solid ${s.color}`,
              border: `1px solid ${C.border}`, borderLeftWidth: 4, borderLeftColor: s.color,
              boxShadow: "0 2px 8px rgba(0,0,0,.05)",
            }}>
              <div style={{ width: 38, height: 38, background: s.bg, borderRadius: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                {s.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{n.title}</span>
                  <span style={{ fontSize: 10, color: C.subtle }}>{n.time}</span>
                </div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5, marginBottom: n.cta ? 8 : 0 }}>{n.body}</div>
                {n.cta && (
                  <button style={{ background: `${C[50]}88`, color: C[700], border: "none", borderRadius: 8, padding: "4px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                    {n.cta}
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <Divider my={14}/>
        <SecLabel>Earlier</SecLabel>
        {read.map(n => {
          const s = TYPE_STYLE[n.type];
          return (
            <div key={n.id} style={{ background: "#fafbfc", borderRadius: 18, padding: 14, marginBottom: 10, opacity: .65, display: "flex", gap: 10, border: `1px solid ${C.border}` }}>
              <div style={{ width: 36, height: 36, background: "#f0f4f8", borderRadius: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                {s.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{n.title}</span>
                  <span style={{ fontSize: 10, color: C.subtle }}>{n.time}</span>
                </div>
                <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.5 }}>{n.body}</div>
              </div>
            </div>
          );
        })}
      </Scroll>
      <BottomNav active="notifs" go={go}/>
    </Phone>
  );
};

export default Notifications;
