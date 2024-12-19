import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const HurricaneInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-950">
          Hurricane Information
        </h1>
      </header>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900">
              What is a Hurricane?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A hurricane is a powerful tropical storm that forms over warm
              ocean waters, characterized by strong winds, heavy rain, and
              sometimes severe flooding. Hurricanes can cause extensive damage
              to coastal areas, with wind speeds reaching 150 mph or more.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900">
              Causes of Hurricanes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Warm Ocean Waters</li>
              <li>Low Pressure Systems</li>
              <li>High Humidity in the Atmosphere</li>
              <li>Weak Upper-Level Winds</li>
              <li>Convergence of Winds Near the Equator</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900">
              Effects of Hurricanes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Hurricanes can cause widespread destruction through high winds,
              storm surges, and heavy rainfall. They lead to flooding, coastal
              erosion, power outages, and loss of life. The economic impact can
              be significant due to damage to infrastructure and homes.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900">
              Preventive Measures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Improved Weather Forecasting Systems</li>
              <li>Evacuation Plans and Shelters</li>
              <li>Stronger Building Codes and Structures</li>
              <li>Coastal Defenses (Sea Walls, Dunes)</li>
              <li>Public Awareness and Education</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>Hurricane Information | For Awareness and Safety</p>
      </footer>
    </div>
  );
};

export default HurricaneInfo;
