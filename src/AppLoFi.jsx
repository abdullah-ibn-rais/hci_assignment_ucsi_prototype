/* ═══════════════════════════════════════════════════════════
   UniBook — Low Fidelity Prototype Layout
   Drop this file as src/App.jsx to replace the hi-fi version
   ══════════════════════════════════════════════════════════ */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Caveat', cursive;
  background: #f2ede3;
  background-image:
    linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,.04) 1px, transparent 1px);
  background-size: 28px 28px;
  min-height: 100vh;
}
`;

/* ── Colour palette (pencil / paper) ── */
const ink    = "#2a2318";
const light  = "#6b6053";
const faint  = "#c4bdb0";
const paper  = "#faf6ef";
const accent = "#3d6b8f";   /* single blue accent for CTA elements */

/* ─────────────────────────────────────────
   PRIMITIVE WIREFRAME BUILDING BLOCKS
───────────────────────────────────────── */

/* Rough rectangle — mimics hand-drawn box */
const Box = ({ w="100%", h=20, r=4, style={}, children }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    border: `2px solid ${ink}`, background: paper,
    display:"flex", alignItems:"center", justifyContent:"center",
    fontSize: 13, color: ink, ...style,
  }}>{children}</div>
);

/* Filled/shaded box */
const FilledBox = ({ w="100%", h=20, shade="#e0ddd7", r=4, style={}, children }) => (
  <div style={{
    width: w, height: h, borderRadius: r,
    border: `2px solid ${ink}`, background: shade,
    display:"flex", alignItems:"center", justifyContent:"center",
    fontSize: 13, color: ink, fontWeight: 600, ...style,
  }}>{children}</div>
);

/* Simple horizontal line */
const Line = ({ my=6, opacity=.3 }) => (
  <div style={{ borderTop:`1.5px solid ${ink}`, margin:`${my}px 0`, opacity }}/>
);

/* Small label */
const Lbl = ({ children, size=11, color=light, style={} }) => (
  <div style={{ fontSize: size, color, lineHeight:1.3, ...style }}>{children}</div>
);

/* Status badge */
const Pill = ({ children, filled }) => (
  <span style={{
    display:"inline-block", fontSize:10,
    border:`1.5px solid ${ink}`, borderRadius:99,
    padding:"1px 7px", background: filled ? ink : "transparent",
    color: filled ? paper : ink,
  }}>{children}</span>
);

/* Icon placeholder circle */
const Circle = ({ size=28, style={} }) => (
  <div style={{ width:size, height:size, borderRadius:"50%", border:`2px solid ${ink}`, flexShrink:0, ...style }}/>
);

/* ─────────────────────────────────────────
   PHONE SHELL
───────────────────────────────────────── */
const Phone = ({ label, annotation, children }) => (
  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10 }}>
    {/* Label above phone */}
    <div style={{ textAlign:"center" }}>
      <div style={{ fontSize:20, fontWeight:700, color:ink }}>{label}</div>
      {annotation && <div style={{ fontSize:13, color:light, marginTop:2 }}>{annotation}</div>}
    </div>

    {/* Phone frame */}
    <div style={{
      width: 260, flexShrink: 0,
      border: `3px solid ${ink}`,
      borderRadius: 36,
      background: paper,
      padding: "28px 16px 20px",
      position: "relative",
      /* Slight shadow for depth */
      boxShadow: "4px 5px 0 rgba(0,0,0,.18)",
    }}>
      {/* Notch */}
      <div style={{
        position:"absolute", top:0, left:"50%", transform:"translateX(-50%)",
        width:70, height:16, background:ink,
        borderBottomLeftRadius:10, borderBottomRightRadius:10,
      }}/>
      {/* Status bar dots */}
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12, opacity:.4 }}>
        <Lbl size={10}>9:41</Lbl>
        <div style={{ display:"flex", gap:4, alignItems:"center" }}>
          {[4,6,8].map(h => <div key={h} style={{ width:3, height:h, background:ink, borderRadius:1 }}/>)}
          <div style={{ width:12, height:7, border:`1.5px solid ${ink}`, borderRadius:2 }}>
            <div style={{ width:"65%", height:"100%", background:ink, borderRadius:1 }}/>
          </div>
        </div>
      </div>

      {children}
    </div>
  </div>
);

/* ─────────────────────────────────────────
   BOTTOM NAV  (reusable)
───────────────────────────────────────── */
const BottomNav = ({ active }) => {
  const items = ["Home","Bookings","Notifs","Profile"];
  return (
    <div style={{
      marginTop:14, borderTop:`2px solid ${ink}`,
      paddingTop:8, display:"flex", justifyContent:"space-around",
    }}>
      {items.map(item => {
        const isActive = item === active;
        return (
          <div key={item} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
            <Box w={22} h={22} r={4}
              style={{ background: isActive ? ink : "transparent",
                       border:`1.5px solid ${ink}` }}/>
            <Lbl size={9} color={isActive ? ink : light}>{item}</Lbl>
          </div>
        );
      })}
    </div>
  );
};

/* ─────────────────────────────────────────
   SCREENS
───────────────────────────────────────── */

const Splash = () => (
  <Phone label="① Splash" annotation="Entry point">
    {/* Logo area */}
    <div style={{ textAlign:"center", padding:"10px 0 18px" }}>
      <Box w={64} h={64} r={16}
        style={{ margin:"0 auto 10px", fontSize:28 }}>
        📋
      </Box>
      <div style={{ fontSize:24, fontWeight:700, color:ink }}>UniBook</div>
      <Lbl size={12} style={{ marginTop:2 }}>Campus Hall Booking System</Lbl>
      <Lbl size={11} style={{ marginTop:3 }}>University of CS &amp; Digital Innovation</Lbl>
    </div>

    {/* Decorative building sketch */}
    <div style={{ display:"flex", justifyContent:"center", gap:6, margin:"8px 0 20px", opacity:.25 }}>
      {[{w:28,h:44},{w:32,h:56},{w:24,h:36}].map((b,i) => (
        <div key={i} style={{ width:b.w, height:b.h, border:`2px solid ${ink}`, borderRadius:3, alignSelf:"flex-end" }}/>
      ))}
    </div>

    <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
      <FilledBox h={38} shade={ink} style={{ color:paper, borderRadius:10 }}>Get Started</FilledBox>
      <Box h={38} r={10}>Sign In to Existing Account</Box>
    </div>
  </Phone>
);

const Login = () => (
  <Phone label="② Login" annotation="Email + password auth">
    {/* Header strip */}
    <FilledBox h={52} shade="#d8d2c8" r={10} style={{ marginBottom:14 }}>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:16, fontWeight:700 }}>Welcome Back 👋</div>
        <Lbl size={11}>Sign in to your student account</Lbl>
      </div>
    </FilledBox>

    {/* Demo hint box */}
    <div style={{ border:`1.5px dashed ${light}`, borderRadius:8, padding:"7px 10px", marginBottom:12 }}>
      <Lbl size={11}>💡 Demo: ahmad.faris@university.edu</Lbl>
      <Lbl size={11}>Password: unibook123</Lbl>
    </div>

    <Lbl size={10} style={{ marginBottom:3 }}>STUDENT EMAIL</Lbl>
    <Box h={36} r={8} style={{ marginBottom:10, justifyContent:"flex-start", paddingLeft:10 }}>
      <Lbl size={12} color={light}>✉️  your@university.edu</Lbl>
    </Box>

    <Lbl size={10} style={{ marginBottom:3 }}>PASSWORD</Lbl>
    <Box h={36} r={8} style={{ marginBottom:6, justifyContent:"flex-start", paddingLeft:10 }}>
      <Lbl size={12} color={light}>🔒  ••••••••</Lbl>
    </Box>

    <div style={{ textAlign:"right", marginBottom:12 }}>
      <Lbl size={11} color={accent}>Forgot password?</Lbl>
    </div>

    <FilledBox h={38} shade={ink} style={{ color:paper, borderRadius:10, marginBottom:10 }}>Sign In</FilledBox>

    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
      <Line my={0}/><Lbl size={10}>or</Lbl><Line my={0}/>
    </div>

    <Box h={36} r={10}>
      <Lbl size={12}>🏫  Student Portal SSO</Lbl>
    </Box>
    <div style={{ textAlign:"center", marginTop:10 }}>
      <Lbl size={12}>New here? <span style={{ color:accent }}>Create account</span></Lbl>
    </div>
  </Phone>
);

const Home = () => (
  <Phone label="③ Home" annotation="Dashboard after login">
    {/* Header */}
    <FilledBox h={88} shade="#cfd8dc" r={12}
      style={{ marginBottom:12, flexDirection:"column", alignItems:"flex-start",
               padding:"10px 12px", justifyContent:"space-between" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, width:"100%" }}>
        <Circle size={32}/>
        <div>
          <Lbl size={11}>Good Day,</Lbl>
          <div style={{ fontSize:15, fontWeight:700, color:ink }}>Ahmad Faris</div>
        </div>
        <Box w={28} h={28} r={6} style={{ marginLeft:"auto" }}>🔔</Box>
      </div>
      {/* CTA card inside header */}
      <div style={{ border:`1.5px dashed rgba(0,0,0,.3)`, borderRadius:8, padding:"6px 10px", width:"100%", marginTop:6 }}>
        <Lbl size={12} style={{ fontWeight:600 }}>Reserve a Hall: Start Your New Booking</Lbl>
        <Box w={70} h={22} r={6} style={{ marginTop:4, background:paper, fontSize:11 }}>Book Now →</Box>
      </div>
    </FilledBox>

    <Lbl size={10} style={{ marginBottom:5 }}>QUICK REBOOK</Lbl>
    <div style={{ display:"flex", gap:6, marginBottom:12 }}>
      {["Seminar Rm 2","Lecture Hall A","Meeting Rm 1"].map((n,i) => (
        <div key={n} style={{ flex:1, border:`2px solid ${ink}`, borderRadius:10, padding:"6px 4px",
          background: i===1 ? "#cfd8dc" : "transparent", textAlign:"center" }}>
          <div style={{ fontSize:16 }}>{["🏛","🎓","🤝"][i]}</div>
          <Lbl size={9} style={{ marginTop:2 }}>{n}</Lbl>
          <Box w="100%" h={18} r={4} style={{ marginTop:4, fontSize:9 }}>Rebook</Box>
        </div>
      ))}
    </div>

    <Lbl size={10} style={{ marginBottom:5 }}>MY BOOKINGS</Lbl>
    {["Seminar Room 2 · Thu, 12 Mar", "Lecture Hall A · Wed, 5 Feb"].map(b => (
      <div key={b} style={{ display:"flex", alignItems:"center", gap:8, border:`1.5px solid ${ink}`, borderRadius:10, padding:"8px 10px", marginBottom:6 }}>
        <Box w={30} h={30} r={6}>📅</Box>
        <Lbl size={12} style={{ flex:1 }}>{b}</Lbl>
        <Lbl size={14}>›</Lbl>
      </div>
    ))}

    <BottomNav active="Home"/>
  </Phone>
);

const Search = () => (
  <Phone label="④ Search & Filter" annotation="Set date, time, filters">
    <FilledBox h={42} shade="#cfd8dc" r={10}
      style={{ marginBottom:12, flexDirection:"column", alignItems:"flex-start", padding:"6px 12px" }}>
      <Lbl size={10}>BOOK A HALL</Lbl>
      <div style={{ fontSize:16, fontWeight:700 }}>Set Date &amp; Time</div>
    </FilledBox>

    {/* Date */}
    <Lbl size={10} style={{ marginBottom:3 }}>SELECT DATE</Lbl>
    <Box h={36} r={8} style={{ marginBottom:8, justifyContent:"flex-start", paddingLeft:10 }}>
      <Lbl size={12} color={light}>📅  dd / mm / yyyy</Lbl>
    </Box>

    {/* Time */}
    <Lbl size={10} style={{ marginBottom:3 }}>TIME RANGE</Lbl>
    <div style={{ display:"flex", gap:6, alignItems:"center", marginBottom:14 }}>
      <Box h={36} r={8} style={{ flex:1, justifyContent:"flex-start", paddingLeft:8 }}>
        <Lbl size={12} color={light}>🕐  From</Lbl>
      </Box>
      <Lbl size={14} color={light}>–</Lbl>
      <Box h={36} r={8} style={{ flex:1, justifyContent:"flex-start", paddingLeft:8 }}>
        <Lbl size={12} color={light}>To</Lbl>
      </Box>
    </div>

    <Lbl size={10} style={{ marginBottom:5 }}>CAPACITY</Lbl>
    <div style={{ display:"flex", gap:6, marginBottom:12 }}>
      {["20","50","100+"].map((c,i) => (
        <FilledBox key={c} w="33%" h={32} r={8}
          shade={i===1 ? ink : "#e0ddd7"}
          style={{ color: i===1 ? paper : ink }}>
          {c}
        </FilledBox>
      ))}
    </div>

    <Lbl size={10} style={{ marginBottom:5 }}>HALL TYPE</Lbl>
    <div style={{ display:"flex", gap:6, marginBottom:16 }}>
      {["🏛 Seminar","🎓 Lecture","🤝 Meeting"].map(t => (
        <Box key={t} w="33%" h={32} r={8} style={{ fontSize:10 }}>{t}</Box>
      ))}
    </div>

    <FilledBox h={38} shade={ink} style={{ color:paper, borderRadius:10 }}>Search Halls</FilledBox>
  </Phone>
);

const Results = () => (
  <Phone label="⑤ Results" annotation="Available halls list">
    {/* Search summary chip */}
    <div style={{ display:"flex", gap:4, flexWrap:"wrap", marginBottom:10 }}>
      {["Jan 15","09:00–15:00","50+ seats"].map(t => (
        <span key={t} style={{ border:`1.5px solid ${ink}`, borderRadius:99, fontSize:10, padding:"2px 8px" }}>{t}</span>
      ))}
    </div>

    {/* Tab toggle */}
    <div style={{ display:"flex", border:`2px solid ${ink}`, borderRadius:99, overflow:"hidden", marginBottom:10 }}>
      <FilledBox w="50%" h={28} shade={ink} r={0} style={{ color:paper, border:"none" }}>Available</FilledBox>
      <Box w="50%" h={28} r={0} style={{ border:"none", borderLeft:`2px solid ${ink}` }}>Unavailable</Box>
    </div>

    {/* Hall cards */}
    {[
      { e:"🏛", n:"Seminar Room 2",    d:"Block A · L2 · 30 seats",  avail:true  },
      { e:"🎓", n:"Lecture Hall A",    d:"Block B · L1 · 120 seats", avail:true  },
      { e:"🤝", n:"Meeting Room 1",    d:"Block A · L1 · 10 seats",  avail:true  },
      { e:"💡", n:"Innovation Lab",    d:"Block C · L3 · 20 seats",  avail:false },
    ].map(h => (
      <div key={h.n} style={{ display:"flex", gap:8, border:`2px solid ${ink}`, borderRadius:12,
        padding:"8px 10px", marginBottom:8, opacity: h.avail ? 1 : .45 }}>
        <Box w={44} h={40} r={8} style={{ fontSize:20, flexShrink:0 }}>{h.e}</Box>
        <div style={{ flex:1 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <Lbl size={13} style={{ fontWeight:700 }}>{h.n}</Lbl>
            <Pill filled={h.avail}>{h.avail ? "✓ Free" : "Booked"}</Pill>
          </div>
          <Lbl size={10} style={{ marginTop:2 }}>📍 {h.d}</Lbl>
          <div style={{ display:"flex", gap:4, marginTop:4 }}>
            {["Projector","AC","Wi-Fi"].map(f => (
              <span key={f} style={{ fontSize:9, border:`1px solid ${faint}`, borderRadius:4, padding:"1px 5px" }}>{f}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </Phone>
);

const Detail = () => (
  <Phone label="⑥ Hall Detail" annotation="Info + book CTA">
    {/* Hero */}
    <FilledBox h={90} shade="#cfd8dc" r={12} style={{ marginBottom:12, fontSize:44, flexDirection:"column" }}>
      🏛
      <div style={{ position:"relative", width:"100%" }}>
        <div style={{ position:"absolute", top:-32, left:0 }}>
          <Box w={28} h={28} r={99} style={{ fontSize:14 }}>‹</Box>
        </div>
        <div style={{ position:"absolute", top:-28, right:0 }}>
          <Pill filled>✓ Available</Pill>
        </div>
      </div>
    </FilledBox>

    <div style={{ fontSize:18, fontWeight:700, color:ink }}>Seminar Room 2</div>
    <Lbl size={11} style={{ marginBottom:10 }}>📍 Block A · Level 2 · 30 seats</Lbl>
    <Lbl size={12} style={{ marginBottom:10, lineHeight:1.5 }}>
      Versatile seminar room for meetings and small classes. Full HD projector and modern furniture.
    </Lbl>

    <Line/>
    <Lbl size={10} style={{ margin:"6px 0 8px" }}>FACILITIES</Lbl>
    {["📽️ Projector","🖊️ Whiteboard","❄️ AC","📶 Wi-Fi"].map(f => (
      <div key={f} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
        <Box w={24} h={24} r={6} style={{ fontSize:13, flexShrink:0 }}/>
        <Lbl size={12}>{f}</Lbl>
      </div>
    ))}

    <Line/>
    <div style={{ border:`1.5px solid ${ink}`, borderRadius:10, padding:"8px 10px", marginBottom:12, marginTop:6 }}>
      <Lbl size={10}>SELECTED SLOT</Lbl>
      <Lbl size={13} style={{ fontWeight:700, marginTop:2 }}>Thu, 12 Mar 2026 · 2:00PM – 4:00PM</Lbl>
    </div>

    <FilledBox h={38} shade={ink} style={{ color:paper, borderRadius:10 }}>Book This Hall</FilledBox>
  </Phone>
);

const Confirm = () => (
  <Phone label="⑦ Confirm Booking" annotation="Review + agree + submit">
    <div style={{ fontSize:16, fontWeight:700, color:ink }}>Seminar Room 2</div>
    <Lbl size={11} style={{ marginBottom:10 }}>📍 Block A · Level 2</Lbl>

    <Lbl size={10} style={{ marginBottom:5 }}>BOOKING SUMMARY</Lbl>
    <div style={{ border:`2px solid ${ink}`, borderRadius:10, padding:"8px 10px", marginBottom:12 }}>
      {[["Hall","Seminar Room 2"],["Date","Thu, 12 Mar 2026"],["Time","2:00PM – 4:00PM"],["Duration","2 hours"],["Capacity","30 seats"]].map(([k,v]) => (
        <div key={k} style={{ display:"flex", justifyContent:"space-between", padding:"4px 0", borderBottom:`1px solid ${faint}` }}>
          <Lbl size={11} color={light}>{k}</Lbl>
          <Lbl size={11} style={{ fontWeight:700 }}>{v}</Lbl>
        </div>
      ))}
    </div>

    <Lbl size={10} style={{ marginBottom:5 }}>PURPOSE / NOTES</Lbl>
    <Box h={44} r={8} style={{ marginBottom:12, alignItems:"flex-start", padding:"8px 10px" }}>
      <Lbl size={11} color={faint}>e.g. Programming Club Weekly Meeting...</Lbl>
    </Box>

    {/* Checkbox */}
    <div style={{ display:"flex", gap:8, alignItems:"flex-start", border:`1.5px solid ${ink}`, borderRadius:10, padding:"8px 10px", marginBottom:12 }}>
      <Box w={18} h={18} r={4} style={{ flexShrink:0, marginTop:1 }}/>
      <Lbl size={11}>I agree to the university hall booking terms. Cancellations ≥24 hours in advance.</Lbl>
    </div>

    <FilledBox h={38} shade="#c8c2b8" r={10} style={{ marginBottom:6 }}>Confirm Booking</FilledBox>
    <Lbl size={10} color={light} style={{ textAlign:"center" }}>ℹ Accept terms to enable button</Lbl>
  </Phone>
);

const BookingSuccess = () => (
  <Phone label="⑧ Booking Success" annotation="Confirmation screen">
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", paddingTop:10 }}>
      {/* Checkmark */}
      <div style={{ width:64, height:64, borderRadius:"50%", border:`3px solid ${ink}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:30, marginBottom:10 }}>
        ✓
      </div>

      <div style={{ fontSize:20, fontWeight:700, color:ink, marginBottom:4 }}>Booking Confirmed!</div>

      {/* Reference */}
      <div style={{ border:`2px solid ${ink}`, borderRadius:10, padding:"10px 20px", marginBottom:12, width:"100%" }}>
        <Lbl size={10} style={{ marginBottom:4 }}>BOOKING REFERENCE</Lbl>
        <div style={{ fontSize:20, fontWeight:700, letterSpacing:"3px", fontFamily:"monospace", color:ink }}>
          BK2026001
        </div>
      </div>

      {/* Notification row */}
      <div style={{ display:"flex", alignItems:"center", gap:8, border:`1.5px solid ${ink}`, borderRadius:10, padding:"8px 10px", width:"100%", marginBottom:20, textAlign:"left" }}>
        <Box w={32} h={32} r={8} style={{ fontSize:16, flexShrink:0 }}>🔔</Box>
        <div>
          <Lbl size={12} style={{ fontWeight:700 }}>Confirmation sent</Lbl>
          <Lbl size={10}>Push notification delivered</Lbl>
        </div>
      </div>

      <FilledBox h={36} shade={ink} style={{ color:paper, borderRadius:10, marginBottom:8, width:"100%" }}>Back to Home</FilledBox>
      <Box h={36} r={10} style={{ width:"100%" }}>View My Bookings</Box>
    </div>
  </Phone>
);

const MyBookings = () => (
  <Phone label="⑨ My Bookings" annotation="Upcoming + past reservations">
    <FilledBox h={52} shade="#cfd8dc" r={10}
      style={{ marginBottom:10, flexDirection:"column", alignItems:"flex-start", padding:"6px 12px" }}>
      <div style={{ fontSize:18, fontWeight:700 }}>My Bookings</div>
      <Lbl size={11}>Manage your reservations</Lbl>
    </FilledBox>

    {/* Tabs */}
    <div style={{ display:"flex", border:`2px solid ${ink}`, borderRadius:10, overflow:"hidden", marginBottom:10 }}>
      <FilledBox w="50%" h={28} shade={ink} r={0} style={{ color:paper, border:"none" }}>Upcoming</FilledBox>
      <Box w="50%" h={28} r={0} style={{ border:"none", borderLeft:`2px solid ${ink}` }}>Past</Box>
    </div>

    {[
      { id:"BK2026001", hall:"Seminar Room 2",  date:"Thu, 12 Mar 2026",  status:"confirmed" },
      { id:"BK2026002", hall:"Lecture Hall A",  date:"Wed, 5 Feb 2026",   status:"pending"   },
      { id:"BK2026003", hall:"Meeting Room 1",  date:"Sat, 1 Mar 2026",   status:"pending"   },
    ].map(b => (
      <div key={b.id} style={{ border:`2px solid ${ink}`, borderRadius:12, padding:"10px 12px", marginBottom:8 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
          <Pill filled={b.status === "confirmed"}>{b.status === "confirmed" ? "✓ Confirmed" : "⏳ Pending"}</Pill>
          <Box w={48} h={20} r={6} style={{ fontSize:10, border:`1.5px solid ${ink}` }}>Cancel</Box>
        </div>
        <Lbl size={13} style={{ fontWeight:700 }}>{b.hall}</Lbl>
        <Lbl size={11} style={{ marginTop:2 }}>📅 {b.date}</Lbl>
        <Lbl size={10} color={light} style={{ marginTop:2, fontFamily:"monospace" }}>{b.id}</Lbl>
      </div>
    ))}

    <BottomNav active="Bookings"/>
  </Phone>
);

const Notifications = () => (
  <Phone label="⑩ Notifications" annotation="Alerts & reminders">
    <FilledBox h={48} shade="#cfd8dc" r={10}
      style={{ marginBottom:10, justifyContent:"space-between", padding:"0 12px" }}>
      <div style={{ fontSize:18, fontWeight:700 }}>Alerts</div>
      <Box w={72} h={24} r={8} style={{ fontSize:10 }}>Mark all read</Box>
    </FilledBox>

    <Lbl size={10} style={{ marginBottom:6 }}>TODAY — 3 UNREAD</Lbl>
    {[
      { icon:"✅", title:"Booking Confirmed",  sub:"Seminar Room 2 on Thu, 12 Mar confirmed.",  cta:"View Booking" },
      { icon:"⏰", title:"Reminder: 1 Hour",   sub:"Lecture Hall A today at 10:00AM.",           cta:"View Details" },
      { icon:"❌", title:"Booking Cancelled",  sub:"Meeting Room 1 on Mar 1 cancelled by admin.",cta:"Rebook"       },
    ].map(n => (
      <div key={n.title} style={{ display:"flex", gap:8, border:`2px solid ${ink}`, borderLeft:`4px solid ${ink}`, borderRadius:12, padding:"8px 10px", marginBottom:7 }}>
        <Box w={32} h={32} r={8} style={{ fontSize:16, flexShrink:0 }}>{n.icon}</Box>
        <div style={{ flex:1 }}>
          <Lbl size={13} style={{ fontWeight:700 }}>{n.title}</Lbl>
          <Lbl size={10} style={{ marginTop:2, lineHeight:1.4 }}>{n.sub}</Lbl>
          <Box w={64} h={20} r={6} style={{ marginTop:5, fontSize:10 }}>{n.cta}</Box>
        </div>
      </div>
    ))}

    <Line my={10} opacity={.2}/>
    <Lbl size={10} style={{ marginBottom:6 }}>EARLIER</Lbl>
    {["ℹ️  Scheduled Maintenance · Block C, 15–16 Mar"].map(n => (
      <div key={n} style={{ display:"flex", gap:8, border:`1.5px solid ${faint}`, borderRadius:12, padding:"8px 10px", opacity:.6 }}>
        <Box w={28} h={28} r={8} style={{ fontSize:14, flexShrink:0 }}>ℹ️</Box>
        <Lbl size={11}>{n}</Lbl>
      </div>
    ))}

    <BottomNav active="Notifs"/>
  </Phone>
);

const Profile = () => (
  <Phone label="⑪ Profile" annotation="Account & settings">
    <FilledBox h={68} shade="#cfd8dc" r={10}
      style={{ marginBottom:12, justifyContent:"flex-start", gap:10, padding:"0 12px" }}>
      <Circle size={42}/>
      <div>
        <div style={{ fontSize:16, fontWeight:700 }}>Ahmad Faris</div>
        <Lbl size={10}>CS/2024/0042 · Computer Science</Lbl>
      </div>
    </FilledBox>

    {/* Stats */}
    <div style={{ display:"flex", gap:6, marginBottom:12 }}>
      {[["12","Total"],["8","Semester"],["2","Upcoming"]].map(([n,l]) => (
        <div key={l} style={{ flex:1, border:`2px solid ${ink}`, borderRadius:10, padding:"6px 0", textAlign:"center" }}>
          <div style={{ fontSize:18, fontWeight:700 }}>{n}</div>
          <Lbl size={9}>{l}</Lbl>
        </div>
      ))}
    </div>

    <Lbl size={10} style={{ marginBottom:6 }}>ACCOUNT</Lbl>
    {["👤 My Profile","📋 My Bookings","🔔 Notifications","🕐 Booking History","📄 Terms & Conditions","🆘 Help & Support"].map(item => (
      <div key={item} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", border:`1.5px solid ${ink}`, borderRadius:10, padding:"8px 10px", marginBottom:6 }}>
        <Lbl size={12}>{item}</Lbl>
        <Lbl size={14} color={light}>›</Lbl>
      </div>
    ))}

    <div style={{ marginTop:4, border:`1.5px solid ${ink}`, borderRadius:12, padding:"10px", textAlign:"center" }}>
      <Lbl size={14} style={{ fontWeight:700, color:"#8b1a1a" }}>Sign Out</Lbl>
    </div>

    <BottomNav active="Profile"/>
  </Phone>
);

/* ─────────────────────────────────────────
   CONNECTOR ARROW between screens
───────────────────────────────────────── */
const Arrow = ({ label }) => (
  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4, padding:"6px 0" }}>
    <div style={{ width:2, height:24, background:ink, opacity:.3 }}/>
    <div style={{ fontSize:11, color:light, letterSpacing:".5px" }}>{label || "↓"}</div>
    <div style={{ width:2, height:24, background:ink, opacity:.3 }}/>
  </div>
);

/* ─────────────────────────────────────────
   APP — single column scroll
───────────────────────────────────────── */
export default function AppLofi() {
  return (
    <>
      <style>{CSS}</style>
      <div style={{ padding: "40px 24px 80px" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: ink }}>UniBook</div>
          <div style={{ fontSize: 16, color: light, marginTop: 4 }}>Low-Fidelity Prototype · BIC1233d</div>
        </div>

        {/* Grid — auto fills based on screen width */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 32,
          alignItems: "stretch",
        }}>
          <Splash/>
          <Login/>
          <Home/>
          <Search/>
          <Results/>
          <Detail/>
          <Confirm/>
          <BookingSuccess/>
          <MyBookings/>
          <Notifications/>
          <Profile/>
        </div>

      </div>
    </>
  );
}