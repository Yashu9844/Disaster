import { SignInButton, SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./components/ui/card";
import { AlertCircle, Presentation } from "lucide-react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import React Router components

// Import new pages/components
import ReportDisaster from './pages/ReportDisaster.tsx';
import ReportedDisasters from './pages/ReportedDisasters.tsx';
import Educate from './pages/Educate.tsx';

function App() {
  const { getToken } = useAuth();
  const { user } = useUser();
  const [data, setData] = useState({});

  async function callProtectedAuthRequired() {
    const token = await getToken();
    const res = await fetch("http://localhost:3000/protected-auth-required", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    setData(json);
  }

  async function callProtectedAuthOptional() {
    const token = await getToken();
    const res = await fetch("http://localhost:3000/protected-auth-optional", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    setData(json);
  }

  return (
    <Router> {/* Wrap your entire app with Router */}
      <div className="max-w-[100vw] overflow-x-hidden">
        <Navbar />
        <div className="max-w-md mx-auto py-20 container">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className="max-w-md mx-auto flex gap-4">
              <Card className="w-64 text-center hover:scale-105">
                <CardHeader>
                  <AlertCircle className="mx-auto text-destructive" />
                </CardHeader>
                <CardContent>
                  <Link to="/reportdisaster">
                    <CardDescription>Report Disaster</CardDescription>
                  </Link>
                </CardContent>
              </Card>
              <Card className="w-64 text-center hover:scale-105">
                <CardHeader>
                  <Presentation className="mx-auto text-destructive" />
                </CardHeader>
                <CardContent>
                  <Link to="/reporteddisasters">
                    <CardDescription>Reported Disasters</CardDescription>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <h2 className="mt-16 text-2xl font-bold">Alerts</h2>
          </SignedIn>
        </div>
      </div>

      {/* Define your routes here */}
      <Routes>
        
        <Route path="/reportdisaster" element={<ReportDisaster />} />
        <Route path="/reporteddisasters" element={<ReportedDisasters />} />
        <Route path="/educate" element={<Educate />} />
      </Routes>
    </Router>
  );
}

export default App;
