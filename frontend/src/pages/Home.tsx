import DisasterList from "@/components/DisasterList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { AlertCircle, ArrowBigRight, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-lg mx-auto py-20 container">
      <Card className="w-full mb-3 flex text-center py-0 px-0">
        <img src="/public/learning.svg" className="w-[50%]" />
        <Link to="/educate" className="flex justify-center items-center">
          <CardContent>
            Start learning
            <ArrowBigRight className="mx-auto" />
          </CardContent>
        </Link>
      </Card>
      <div className="mx-auto flex gap-4">
        <Card className="w-64 text-center hover:scale-105">
          <Link to="/report">
            <CardHeader>
              <AlertCircle className="mx-auto text-destructive" />
            </CardHeader>
            <CardContent>
              <CardDescription>Report Disaster</CardDescription>
            </CardContent>
          </Link>
        </Card>
        <Card className="w-64 text-center hover:scale-105">
          <Link to="/disasters">
            <CardHeader>
              <Presentation className="mx-auto text-destructive" />
            </CardHeader>
            <CardContent>
              <CardDescription>Reported Disasters</CardDescription>
            </CardContent>
          </Link>
        </Card>
      </div>
      <h2 className="mt-16 text-2xl font-bold">Alerts</h2>
      <DisasterList />
    </div>
  );
};
export default Home;
