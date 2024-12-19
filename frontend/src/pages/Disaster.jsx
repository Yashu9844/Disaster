import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const DisasterInfo = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("id");

  useEffect(() => {
    axios
      .get(`https://api.reliefweb.int/v1/disasters/${value}`)
      .then((response) => {
        const disasterData = response.data.data[0].fields;
        setData({
          name: disasterData.name,
          status: disasterData.status,
          description: disasterData.description,
          primaryCountry: disasterData.primary_country.name,
          disasterTypes: disasterData.type.map((t) => t.name).join(", "),
        });
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch disaster information.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Skeleton className="w-full max-w-lg h-40" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Alert className="max-w-md" variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="max-w-xl w-full bg-white shadow-lg rounded-lg border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {data.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            <strong>Status:</strong> {data.status}
          </p>
          <p className="text-gray-600">
            <strong>Country:</strong> {data.primaryCountry}
          </p>
          <p className="text-gray-600">
            <strong>Disaster Types:</strong> {data.disasterTypes}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisasterInfo;
