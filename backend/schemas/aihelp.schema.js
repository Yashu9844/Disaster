export const geminiApiSchema = {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "The title of the report or disaster response summary."
      },
      stepsAndGuidelines: {
        type: "array",
        description: "A step-by-step guide or set of instructions for responding to the disaster.",
        items: {
          type: "string",
          description: "A single step or guideline in the disaster response process."
        }
      },
      organizationContactAndHelp: {
        type: "array",
        description: "Details of organizations or authorities to contact for help or assistance.",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Name of the organization or authority."
            },
            contact: {
              type: "string",
              description: "Contact details such as phone number or email."
            },
            role: {
              type: "string",
              description: "The role or responsibility of the organization in disaster management."
            },
            address: {
              type: "string",
              description: "Physical address or location of the organization (if applicable)."
            }
          },
          required: ["name", "contact", "role"]
        }
      }
    },
    required: ["title", "stepsAndGuidelines", "organizationContactAndHelp"]
  };
  