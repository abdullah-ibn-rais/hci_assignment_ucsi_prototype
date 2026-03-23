import { useState } from "react";
import { C, GRAD } from "../constants";
import Btn from "../components/Btn";
import { SecLabel } from "../components/Primitives";
import { Phone, StatusBar, TopBar, Scroll } from "../components/PhoneShell";

const Search = ({ go }) => {
  const [date,  setDate]  = useState("");
  const [from,  setFrom]  = useState("");
  const [to,    setTo]    = useState("");
  const [cap,   setCap]   = useState(null);
  const [type,  setType]  = useState(null);
  const [tried, setTried] = useState(false);

  function doSearch() {
    setTried(true);
    if (date && from && to) go("results");
  }

  return (
    <Phone>
      <div style={{ background: GRAD, flexShrink: 0 }}>
        <StatusBar light />
        <div style={{ padding: "8px 20px 20px" }}>
          <TopBar title="Book a Hall" onBack={() => go("home")} light/>
          <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 16 }}>Set Date &amp; Time</div>

          {/* Date picker */}
          <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 16, padding: "12px 14px", marginBottom: 10, border: "1px solid rgba(255,255,255,.15)" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: `${C[50]}aa`, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 6 }}>Select Date</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>📅</span>
              <input type="date" value={date} onChange={e => setDate(e.target.value)}
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 14, fontWeight: 700, color: date ? "#fff" : "rgba(255,255,255,.5)", colorScheme: "dark" }}/>
            </div>
            {tried && !date && <div style={{ fontSize: 10, color: "#ff9999", marginTop: 4 }}>⚠ Please select a date</div>}
          </div>

          {/* Time range */}
          <div style={{ background: "rgba(255,255,255,.12)", borderRadius: 16, padding: "12px 14px", border: "1px solid rgba(255,255,255,.15)" }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: `${C[50]}aa`, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 6 }}>Time Range</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16 }}>🕐</span>
              <input type="time" value={from} onChange={e => setFrom(e.target.value)}
                style={{ background: "transparent", border: "none", outline: "none", fontSize: 14, fontWeight: 700, color: from ? "#fff" : "rgba(255,255,255,.5)", colorScheme: "dark" }}/>
              <span style={{ color: "rgba(255,255,255,.5)", fontSize: 13 }}>–</span>
              <input type="time" value={to} onChange={e => setTo(e.target.value)}
                style={{ background: "transparent", border: "none", outline: "none", fontSize: 14, fontWeight: 700, color: to ? "#fff" : "rgba(255,255,255,.5)", colorScheme: "dark" }}/>
            </div>
            {tried && (!from || !to) && <div style={{ fontSize: 10, color: "#ff9999", marginTop: 4 }}>⚠ Please set a time range</div>}
          </div>
        </div>
      </div>

      <Scroll style={{ padding: "14px 20px", background: "#f0f6fa" }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 14 }}>Filters</div>

        <SecLabel>Capacity</SecLabel>
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["20", "50", "100+"].map((b, i) => (
            <button key={b} onClick={() => setCap(cap === i ? null : i)} style={{
              flex: 1, padding: "10px 0", borderRadius: 10, border: "none",
              background: cap === i ? C[600] : "#d8eaf5",
              color: cap === i ? "#fff" : C[700],
              fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
              boxShadow: cap === i ? `0 4px 12px rgba(1,79,134,.25)` : "none",
            }}>{b}</button>
          ))}
        </div>

        <SecLabel>Hall Type</SecLabel>
        <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
          {[["🏛", "Seminar"], ["🎓", "Lecture"], ["🤝", "Meeting"]].map(([e, t], i) => (
            <button key={t} onClick={() => setType(type === i ? null : i)} style={{
              flex: 1, padding: "10px 0", borderRadius: 10, border: "none",
              background: type === i ? C[600] : "#d8eaf5",
              color: type === i ? "#fff" : C[700],
              fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
              boxShadow: type === i ? `0 4px 12px rgba(1,79,134,.25)` : "none",
            }}>{e} {t}</button>
          ))}
        </div>

        <Btn onClick={doSearch} style={{ marginBottom: 20 }}>Search Halls</Btn>

        <div style={{ textAlign: "center", padding: "8px 0 8px" }}>
          <div style={{ fontSize: 52, opacity: .3, marginBottom: 8 }}>🗓️</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C[500] }}>Set your criteria above</div>
          <div style={{ fontSize: 12, color: C.subtle }}>and find your perfect space.</div>
        </div>
      </Scroll>
    </Phone>
  );
};

export default Search;
