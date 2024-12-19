import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./components/ui/card";
import { AlertCircle, Presentation } from "lucide-react";
import Navbar from "./components/Navbar";

function App() {
  const { getToken } = useAuth();
  const { user } = useUser(); // Access user details
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
    <div className="max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <div className="max-w-md mx-auto py-20 container">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className="max-w-md mx-auto flex gap-4">
            <Card className="w-64 text-center hover:scale-105">
              <CardHeader className="">
                <AlertCircle className="mx-auto text-destructive" />
              </CardHeader>
              <CardContent>
                <CardDescription className="">Report Disaster</CardDescription>
              </CardContent>
            </Card>
            <Card className="w-64 text-center hover:scale-105">
              <CardHeader className="">
                <Presentation className="mx-auto text-destructive" />
              </CardHeader>
              <CardContent>
                <CardDescription className="">
                  Reported Disasters
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <h2 className="mt-16 text-2xl font-bold">Alerts</h2>
        </SignedIn>
      </div>
    </div>
  );
}

export default App;
