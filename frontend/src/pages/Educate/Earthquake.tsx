import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const EarthquakeInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-950">
          Earthquake Information
        </h1>
      </header>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900    ">
              What is an Earthquake?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              An earthquake is the shaking of the surface of the Earth resulting
              from a sudden release of energy in the Earth's lithosphere that
              creates seismic waves. Earthquakes can range from weak tremors
              that go unnoticed to violent shakes that cause massive
              destruction.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900    ">
              Causes of Earthquakes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tectonic Plate Movements</li>
              <li>Volcanic Activity</li>
              <li>Human Activity (e.g., mining, dam construction)</li>
              <li>Fault Lines and Plate Boundaries</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-900    ">
              Effects of Earthquakes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Earthquakes can cause massive destruction to buildings,
              infrastructure, and landscapes. They often lead to loss of life,
              tsunamis, landslides, and fires. Secondary effects include social,
              economic, and environmental impacts.
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
              <li>Seismic Building Codes</li>
              <li>Early Warning Systems</li>
              <li>Education and Preparedness Plans</li>
              <li>Strengthening Infrastructure</li>
              <li>Emergency Response Drills</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>Earthquake Information | For Awareness and Preparedness</p>
      </footer>
    </div>
  );
};

export default EarthquakeInfo;
