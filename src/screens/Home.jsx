import { C, GRAD, HALLS, BOOKINGS } from "../constants";
import { Badge, SecLabel } from "../components/Primitives";
import { Phone, StatusBar, BottomNav, Scroll } from "../components/PhoneShell";

const Home = ({ go, pickHall }) => (
  <Phone>
    {/* Gradient header */}
    <div style={{ background: GRAD, flexShrink: 0 }}>
      <StatusBar light />
      <div style={{ padding: "8px 20px 0" }}>
        {/* User greeting row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
              <div style={{ fontSize: 11, color: `${C[50]}cc`, fontWeight: 500 }}>Good Day,</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>Abdullah Ibn Rais</div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <button onClick={() => go("notifs")} style={{
              background: "rgba(255,255,255,.15)", border: "none", borderRadius: 10,
              width: 36, height: 36, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>
            <div style={{ position: "absolute", top: -2, right: -2, width: 9, height: 9, background: C.red, borderRadius: "50%", border: "2px solid #013a63" }} />
          </div>
        </div>
      </div>

      {/* CTA card */}
      <div style={{
        background: "rgba(255,255,255,.12)", backdropFilter: "blur(12px)",
        borderRadius: 20, margin: "14px 16px", padding: "16px 18px",
        border: "1px solid rgba(255,255,255,.15)",
      }}>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
          Reserve a Hall: Start<br />Your New Booking
        </div>
        <button onClick={() => go("search")} style={{
          marginTop: 12, background: "#fff", color: C[700],
          border: "none", borderRadius: 10, padding: "8px 16px",
          fontSize: 12, fontWeight: 700, cursor: "pointer",
        }}>
          Book Now →
        </button>
      </div>
    </div>

    <Scroll style={{ background: "#f0f6fa" }}>
      {/* Quick Rebook */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px 8px" }}>
        <SecLabel style={{ marginBottom: 0 }}>Quick Rebook</SecLabel>
      </div>
      <div style={{ display: "flex", gap: 10, padding: "0 20px", overflowX: "auto", marginBottom: 4 }}>
        {HALLS.slice(0, 3).map((h, i) => (
          <div key={h.id} onClick={() => { pickHall(h); go("detail"); }} style={{
            background: i === 1 ? C[700] : "#fff",
            borderRadius: 18, padding: "12px 14px", minWidth: 108, flexShrink: 0,
            textAlign: "center", cursor: "pointer",
            border: `1px solid ${i === 1 ? "transparent" : C.border}`,
            boxShadow: i === 1 ? `0 6px 18px rgba(1,73,124,.25)` : "0 2px 8px rgba(0,0,0,.04)",
          }}>
            <div style={{ fontSize: 24, marginBottom: 6 }}>{h.emoji}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: i === 1 ? "#fff" : C.text, marginBottom: 10, lineHeight: 1.3 }}>{h.name}</div>
            <button style={{
              background: "transparent", fontSize: 11, fontWeight: 600, cursor: "pointer",
              border: `1px solid ${i === 1 ? "rgba(255,255,255,.35)" : C[300]}`,
              color: i === 1 ? "rgba(255,255,255,.9)" : C[500],
              borderRadius: 9, padding: "5px 10px", width: "100%", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
            }}>Rebook ↺</button>
          </div>
        ))}
      </div>

      {/* Available Today */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px 8px" }}>
        <SecLabel style={{ marginBottom: 0 }}>Available Today</SecLabel>
        <span onClick={() => go("search")} style={{ fontSize: 11, fontWeight: 700, color: C[500], cursor: "pointer" }}>See all</span>
      </div>
      <div style={{ display: "flex", gap: 8, padding: "0 20px", overflowX: "auto", marginBottom: 4 }}>
        {HALLS.filter(h => h.avail).slice(0, 4).map(h => (
          <div key={h.id} onClick={() => { pickHall(h); go("detail"); }} style={{
            background: "#fff", borderRadius: 14, padding: "10px 12px",
            minWidth: 86, flexShrink: 0, textAlign: "center", cursor: "pointer",
            border: `1px solid ${C.border}`, boxShadow: "0 2px 6px rgba(0,0,0,.04)",
          }}>
            <div style={{ fontSize: 20, marginBottom: 4 }}>{h.emoji}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: C.text, marginBottom: 6 }}>
              {h.name.split(" ").slice(0, 2).join(" ")}
            </div>
            <Badge type="green">✓ Free</Badge>
          </div>
        ))}
      </div>

      {/* Bookings preview */}
      <div style={{ padding: "14px 20px 8px" }}><SecLabel>My Bookings</SecLabel></div>
      <div style={{ padding: "0 20px" }}>
        {BOOKINGS.slice(0, 2).map(b => (
          <div key={b.id} onClick={() => go("bookings")} style={{
            background: "#fff", borderRadius: 16, padding: "12px 14px", marginBottom: 10,
            display: "flex", alignItems: "center", gap: 10, cursor: "pointer",
            border: `1px solid ${C.border}`, boxShadow: "0 2px 6px rgba(0,0,0,.04)",
          }}>
            <div style={{ width: 38, height: 38, background: `${C[50]}88`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C[600]} strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{b.hall}</div>
              <div style={{ fontSize: 11, color: C.muted }}>{b.date}</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.subtle} strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        ))}
      </div>
    </Scroll>
    <BottomNav active="home" go={go} />
  </Phone>
);

export default Home;
