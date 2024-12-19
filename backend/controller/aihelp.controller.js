import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import dotenv from "dotenv";
import { geminiApiSchema } from "../schemas/aihelp.schema.js";


dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.key);

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
  { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  safetySettings,
  generationConfig: {
    responseMimeType: "application/json",
    responseSchema: geminiApiSchema,
  },
});

export const getDisasterResponse = async (req, res) => {
  try {
    const { disasterName, location } = req.body;

    // Validate required fields
    if (!disasterName || !location || !location.latitude || !location.longitude) {
      return res
        .status(400)
        .json({ error: "Missing required fields: disasterName, or location with latitude and longitude." });
    }

    // Construct the location description
    const locationDescription = `
      Latitude: ${location.latitude}, 
      Longitude: ${location.longitude}${location.address ? `, Address: ${location.address}` : ""}.
    `;

    // Construct the prompt
    const prompt = `
      Provide a disaster response plan for the following details:
      - Disaster Name: "${disasterName.toUpperCase()}". 
      - Location: ${locationDescription}.

      
      
      Include the following:
      1. A clear title for the report.
      2. Detailed steps and guidelines for responding to the disaster.
      3. Contact information for relevant organizations and authorities, including their name, contact, role, and address based on the location.
      
      Ensure proper formatting with paragraph breaks using '\\n'.
    `;

    const result = await model.generateContent(prompt);

    const disasterResponseData = JSON.parse(result.response.text());
    console.log(disasterResponseData);

    res.json(disasterResponseData);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
