import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const FloodInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-800">
          Flood Information
        </h1>
      </header>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-600">
              What is a Flood?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A flood is an overflow of water that submerges land which is
              usually dry. It can occur due to various factors such as heavy
              rainfall, rising river levels, or coastal storms.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-600">
              Causes of Floods
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Heavy Rainfall</li>
              <li>Snowmelt</li>
              <li>Dam or Levee Failure</li>
              <li>Storm Surges</li>
              <li>Urbanization and Poor Drainage</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-600">
              Preventive Measures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Building dams and levees</li>
              <li>Creating flood warning systems</li>
              <li>Improving urban drainage systems</li>
              <li>Educating communities about flood risks</li>
              <li>Implementing floodplain zoning regulations</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>Flood Information | For Awareness and Prevention</p>
      </footer>
    </div>
  );
};

export default FloodInfo;
