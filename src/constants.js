/* ═══════════════════════════════════════════
   COLOR SYSTEM
═══════════════════════════════════════════ */
export const C = {
  900: "#012a4a",
  800: "#013a63",
  700: "#01497c",
  600: "#014f86",
  500: "#2a6f97",
  400: "#2c7da0",
  300: "#468faf",
  200: "#61a5c2",
  100: "#89c2d9",
  50:  "#a9d6e5",
  bg:      "#f0f6fa",
  card:    "#ffffff",
  border:  "#d0e4ef",
  text:    "#012a4a",
  muted:   "#4a6a80",
  subtle:  "#8aa8be",
  red:     "#c0392b",
  redBg:   "#fdf0ef",
  redBd:   "#f5b7b1",
  amber:   "#9a6020",
  amberBg: "#fef8ec",
  green:   "#1a7a4a",
  greenBg: "#eaf7f0",
};

export const GRAD = `linear-gradient(145deg, ${C[900]} 0%, ${C[700]} 60%, ${C[500]} 100%)`;

/* ═══════════════════════════════════════════
   AUTH CREDENTIALS (demo)
═══════════════════════════════════════════ */
export const VALID_EMAIL    = "abdullah@yahoo.com";
export const VALID_PASSWORD = "unibook123";

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
export const HALLS = [
  { id:1, name:"Seminar Room 2",    loc:"Block A · Level 2", cap:30,  emoji:"🏛",  bg:"#e8f4fd", avail:true,  fac:["Projector","Whiteboard","AC","Wi-Fi"],        desc:"Versatile seminar room for meetings and small classes. Full HD projector and modern furniture." },
  { id:2, name:"Lecture Hall A",    loc:"Block B · Level 1", cap:120, emoji:"🎓",  bg:"#e4f0f8", avail:true,  fac:["Projector","Microphone","AC","Wi-Fi","Stage"],  desc:"Large tiered hall with stage and sound — perfect for talks and formal presentations." },
  { id:3, name:"Meeting Room 1",    loc:"Block A · Level 1", cap:10,  emoji:"🤝",  bg:"#eaf6fb", avail:true,  fac:["Smart TV","Whiteboard","AC"],                  desc:"Compact room for small group discussions, interviews or one-on-one tutorials." },
  { id:4, name:"Innovation Lab",    loc:"Block C · Level 3", cap:20,  emoji:"💡",  bg:"#e0ecf5", avail:false, fac:["Smart TV","Whiteboard","AC","3D Printer"],     desc:"Creative maker space. Under scheduled maintenance until further notice." },
  { id:5, name:"Multipurpose Hall", loc:"Block D · Ground",  cap:200, emoji:"🏟",  bg:"#daeaf4", avail:true,  fac:["Stage","Sound System","Projector","AC"],       desc:"Largest campus event space for exhibitions and large-scale events." },
];

export const BOOKINGS = [
  { id:"BK2026001", hall:"Seminar Room 2", date:"Thu, 12 Mar 2026",  time:"2:00PM – 4:00PM",   status:"confirmed" },
  { id:"BK2026002", hall:"Lecture Hall A", date:"Wed, 5 Feb 2026",   time:"10:00AM – 12:00PM", status:"pending" },
  { id:"BK2026003", hall:"Meeting Room 1", date:"Sat, 1 Mar 2026",   time:"3:00PM – 5:00PM",   status:"pending" },
  { id:"BK2025099", hall:"Seminar Room 2", date:"Tue, 10 Dec 2025",  time:"2:00PM – 4:00PM",   status:"done" },
];

export const NOTIFS = [
  { id:1, type:"confirmed", title:"Booking Confirmed",     time:"2m ago",     body:"Your booking for Seminar Room 2 on Thu, 12 Mar has been confirmed.", cta:"View Booking", unread:true  },
  { id:2, type:"reminder",  title:"Reminder: 1 Hour",      time:"58m ago",    body:"Lecture Hall A today at 10:00AM. Please arrive on time.",           cta:"View Details", unread:true  },
  { id:3, type:"cancelled", title:"Booking Cancelled",     time:"3h ago",     body:"Meeting Room 1 booking on Mar 1 was cancelled by admin.",           cta:"Rebook",       unread:true  },
  { id:4, type:"available", title:"Hall Now Available",    time:"Yesterday",  body:"Innovation Lab (previously saved) is now accepting bookings.",      cta:"Book Now",     unread:false },
  { id:5, type:"info",      title:"Scheduled Maintenance", time:"2 days ago", body:"Block C halls unavailable on 15–16 Mar for electrical maintenance.", cta:null,           unread:false },
];

/* ═══════════════════════════════════════════
   SCREEN REGISTRY
═══════════════════════════════════════════ */
export const SCREENS = [
  { key:"splash",   group:"Auth",    label:"Splash / Welcome" },
  { key:"login",    group:"Auth",    label:"Sign In" },
  { key:"signup",   group:"Auth",    label:"Create Account" },
  { key:"otp",      group:"Auth",    label:"Verify OTP" },
  { key:"forgot",   group:"Auth",    label:"Forgot Password" },
  { key:"reset",    group:"Auth",    label:"Reset Password" },
  { key:"home",     group:"Main",    label:"Home" },
  { key:"search",   group:"Main",    label:"Search & Filter" },
  { key:"noresult", group:"Main",    label:"No Results" },
  { key:"results",  group:"Main",    label:"Search Results" },
  { key:"detail",   group:"Main",    label:"Hall Detail" },
  { key:"confirm",  group:"Booking", label:"Confirmation" },
  { key:"success",  group:"Booking", label:"Booking Success" },
  { key:"failed",   group:"Booking", label:"Booking Failed" },
  { key:"bookings", group:"Manage",  label:"My Bookings" },
  { key:"notifs",   group:"Manage",  label:"Notifications" },
  { key:"profile",  group:"Manage",  label:"Profile" },
];

export const GROUPS       = ["Auth","Main","Booking","Manage"];
export const GROUP_COLORS = { Auth: C[600], Main: C[500], Booking: "#1a7a4a", Manage: C[300] };
