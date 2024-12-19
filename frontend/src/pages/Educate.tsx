import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function DisasterCards() {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto mt-20 sm:grid-cols-2 lg:grid-cols-2 container">
      <Link className="" to="/flood">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Flood</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Learn about floods, their causes, effects, and preventive
              measures.
            </CardDescription>
          </CardContent>
        </Card>
      </Link>

      <Link className="" to="/earthquake">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Earthquake</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get information about earthquakes, their causes, and how to
              prepare.
            </CardDescription>
          </CardContent>
        </Card>
      </Link>

      <Link className="" to="/hurricane">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Hurricane</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Discover more about hurricanes, their formation, and safety tips.
            </CardDescription>
          </CardContent>
        </Card>
      </Link>

      <Link className="" to="/wildfire">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Wildfire</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Understand wildfires, their impact, and how to stay safe during
              one.
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
