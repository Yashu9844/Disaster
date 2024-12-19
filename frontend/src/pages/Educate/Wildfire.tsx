import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Wildfire = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-900">
          Wildfire Information
        </h1>
      </header>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-950">
              What is a Wildfire?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A wildfire is an uncontrolled fire that spreads rapidly, typically
              in forests, grasslands, or other natural areas. Wildfires can
              occur naturally due to lightning strikes or be ignited by human
              activity, and they can cause extensive damage to ecosystems,
              property, and human life.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-950">
              Causes of Wildfires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Lightning Strikes</li>
              <li>
                Human Activity (e.g., campfires, discarded cigarettes,
                fireworks)
              </li>
              <li>Heatwaves and Droughts</li>
              <li>Deforestation and Land Use Changes</li>
              <li>Climate Change</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-950">
              Effects of Wildfires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Wildfires can cause destruction of habitats, air pollution, and
              loss of biodiversity. They can result in the loss of life and
              property, as well as the displacement of communities. Wildfires
              can also lead to long-term environmental damage, including soil
              degradation and water contamination.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium text-blue-950">
              Preventive Measures
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Creating Firebreaks and Fire Lines</li>
              <li>Fire Safety Education and Awareness</li>
              <li>Controlled Burns and Forest Management</li>
              <li>Improving Emergency Response Systems</li>
              <li>Reducing Human-Induced Ignitions</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-sm text-gray-600">
        <p>Wildfire Information | For Awareness and Prevention</p>
      </footer>
    </div>
  );
};

export default Wildfire;
