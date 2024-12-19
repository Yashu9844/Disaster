import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function DisasterCards() {
  const [aiResponse, setAiResponse] = useState(null); // State to hold AI response
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formInputs, setFormInputs] = useState({
    disasterName: "",
    address: "",
  });

  const handleAskAI = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/ai/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          disasterName: formInputs.disasterName,
          location: {
            latitude: 37.7749, // Optionally dynamic or static
            longitude: -122.4194, // Optionally dynamic or static
            address: formInputs.address,
          },
        }),
      });
      const data = await response.json();
      setAiResponse(data); // Update the state with AI response
      setShowModal(false); // Close modal after submission
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-6">Disaster Information</h1>

      {/* Disaster Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Flood</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Learn about floods, their causes, effects, and preventive measures.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Earthquake</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Get information about earthquakes, their causes, and how to prepare.
            </CardDescription>
          </CardContent>
        </Card>

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

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Wildfire</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Understand wildfires, their impact, and how to stay safe during one.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Ask AI Button */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-8 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Ask AI Help
      </button>

      {/* Modal for Input Form */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Ask AI for Help</h2>
            <label className="block mb-2 font-semibold">Disaster Type:</label>
            <input
              type="text"
              name="disasterName"
              value={formInputs.disasterName}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border rounded"
              placeholder="Enter Disaster Name (e.g., Flood)"
            />
            <label className="block mb-2 font-semibold">Address:</label>
            <input
              type="text"
              name="address"
              value={formInputs.address}
              onChange={handleInputChange}
              className="block w-full mb-4 p-2 border rounded"
              placeholder="Enter Address or Location"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAskAI}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Response Section */}
      {loading && (
        <p className="mt-4 text-blue-500 font-semibold">Loading AI response...</p>
      )}
      {aiResponse && (
        <div className="mt-8 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-bold">{aiResponse.title}</h3>
          <div className="mt-2">
            <h4 className="font-semibold">Steps and Guidelines:</h4>
            <ul className="list-disc pl-5">
              {aiResponse.stepsAndGuidelines.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold">Organization Contact and Help:</h4>
            <ul>
              {aiResponse.organizationContactAndHelp.map((org, index) => (
                <li key={index} className="mt-2">
                  <strong>{org.name}</strong> - {org.role}
                  <br />
                  Contact: {org.contact}
                  <br />
                  Address: {org.address}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
