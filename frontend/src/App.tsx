import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components

// Import new pages/components
import ReportDisaster from "./pages/ReportDisaster.tsx";
import ReportedDisasters from "./pages/ReportedDisasters.tsx";
import Educate from "./pages/Educate.tsx";

import Navbar from "@/components/Navbar";
import Home from "./pages/Home.tsx";
import FloodInfo from "./pages/Educate/Flood.tsx";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
} from "@clerk/clerk-react";
import DisasterInfo from "./pages/Disaster";
import EarthquakeInfo from "./pages/Educate/Earthquake.tsx";
import Hurricane from "./pages/Educate/Hurricane.tsx";
import Wildfire from "./pages/Educate/Wildfire.tsx";

function App() {
  const { getToken } = useAuth();
  const { user } = useUser();

  return (
    <Router>
      {/* Wrap your entire app with Router */}

      {/* Define your routes here */}

      <div className="max-w-[100vw] overflow-x-hidden">
        <Navbar />
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disaster" element={<DisasterInfo />} />
            <Route path="/flood" element={<FloodInfo />} />
            <Route path="/earthquake" element={<EarthquakeInfo />} />
            <Route path="/hurricane" element={<Hurricane />} />
            <Route path="/wildfire" element={<Wildfire />} />

            <Route path="/report" element={<ReportDisaster />} />
            <Route path="/disasters" element={<ReportedDisasters />} />
            <Route path="/educate" element={<Educate />} />
          </Routes>
        </SignedIn>
      </div>
    </Router>
  );
}

export default App;
