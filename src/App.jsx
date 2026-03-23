import { useState } from "react";
import { C, HALLS, SCREENS, GROUP_COLORS } from "./constants";
import Sidebar from "./components/Sidebar";

// Screens
import Splash        from "./screens/Splash";
import Login         from "./screens/Login";
import Signup        from "./screens/Signup";
import OTP           from "./screens/OTP";
import { Forgot, ResetPass } from "./screens/ForgotReset";
import Home          from "./screens/Home";
import Search        from "./screens/Search";
import NoResults     from "./screens/NoResults";
import Results       from "./screens/Results";
import Detail        from "./screens/Detail";
import Confirm       from "./screens/Confirm";
import { Success, Failed } from "./screens/SuccessFailed";
import MyBookings    from "./screens/MyBookings";
import Notifications from "./screens/Notifications";
import Profile       from "./screens/Profile";

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [hall,   setHall]   = useState(HALLS[0]);

  const go       = s => setScreen(s);
  const pickHall = h => setHall(h);

  const renderScreen = () => {
    switch (screen) {
      case "splash":    return <Splash go={go}/>;
      case "login":     return <Login go={go}/>;
      case "signup":    return <Signup go={go}/>;
      case "otp":       return <OTP go={go}/>;
      case "forgot":    return <Forgot go={go}/>;
      case "reset":     return <ResetPass go={go}/>;
      case "home":      return <Home go={go} pickHall={pickHall}/>;
      case "search":    return <Search go={go}/>;
      case "noresult":  return <NoResults go={go}/>;
      case "results":   return <Results go={go} pickHall={pickHall}/>;
      case "detail":    return <Detail hall={hall} go={go}/>;
      case "confirm":   return <Confirm hall={hall} go={go}/>;
      case "success":   return <Success go={go}/>;
      case "failed":    return <Failed go={go}/>;
      case "bookings":  return <MyBookings go={go}/>;
      case "notifs":    return <Notifications go={go}/>;
      case "profile":   return <Profile go={go}/>;
      default:          return <Home go={go} pickHall={pickHall}/>;
    }
  };

  // Find current screen meta for the label
  const meta = SCREENS.find(s => s.key === screen);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      background: "linear-gradient(160deg, #011824 0%, #021f35 50%, #011824 100%)",
    }}>
      {/* Left sidebar — only navigation panel */}
      <Sidebar screen={screen} go={go}/>

      {/* Center — phone frame */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 40px",
      }}>
        {/* Current screen label */}
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 6, height: 6, background: GROUP_COLORS[meta?.group], borderRadius: "50%" }}/>
          <span style={{ fontSize: 12, fontWeight: 700, color: `${C[50]}88`, letterSpacing: ".5px" }}>
            {meta?.group?.toUpperCase()} · {meta?.label}
          </span>
        </div>

        {renderScreen()}

        <div style={{ marginTop: 14, fontSize: 11, color: `${C[50]}44`, textAlign: "center" }}>
          Interactive prototype — all inputs, buttons, and navigation are functional
        </div>
      </div>
    </div>
  );
}


























