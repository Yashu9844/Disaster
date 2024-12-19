"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Define the type of the data returned by the API
interface DisasterData {
  id: string;
  fields: {
    id: number;
    name: string;
    status: string;
    glide: string;
  };
  href: string;
}

export default function DisasterList() {
  const [disasters, setDisasters] = useState<DisasterData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDisasters = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/dis/disastercity"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch disasters");
        }
        const data = await response.json();
        setDisasters(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDisasters();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading disasters...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="p-4">
      {disasters.map((disaster) => {
        const dateMatch = disaster.fields.name.match(
          /-\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}/
        );
        const date = dateMatch
          ? dateMatch[0].replace("- ", "")
          : "Unknown Date";

        return (
          <Card key={disaster.id} className="p-4 my-4">
            <CardTitle className="text-lg font-bold">
              {disaster.fields.name
                .replace(
                  /-\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}/,
                  ""
                )
                .trim()}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              <p>Status: {disaster.fields.status}</p>
              <p>Date: {date}</p>
            </CardDescription>
            <CardFooter className="mt-4 px-0">
              <Link
                className={buttonVariants({ variant: "default" })}
                to={`/Disaster/?id=${disaster.id}`}
              >
                Read More
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
