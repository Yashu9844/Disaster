import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import React Router components

// Import new pages/components
import ReportDisaster from "./pages/ReportDisaster.tsx";
import ReportedDisasters from "./pages/ReportedDisasters.tsx";
import Educate from "./pages/Educate.tsx";

import { useAuth, useUser } from "@clerk/clerk-react";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home.tsx";
import FloodInfo from "./pages/Educate/Flood.tsx";

function App() {
  const { getToken } = useAuth();
  const { user } = useUser();

  return (
    <Router>
      {/* Wrap your entire app with Router */}

      {/* Define your routes here */}

      <div className="max-w-[100vw] overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flood" element={<FloodInfo />} />
          <Route path="/report" element={<ReportDisaster />} />
          <Route path="/disasters" element={<ReportedDisasters />} />
          <Route path="/educate" element={<Educate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
