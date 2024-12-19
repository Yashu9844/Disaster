// disasterController.js
import axios from 'axios'

const DISASTER_API_URL = "https://api.reliefweb.int/v1/reports";

// Function to filter reports mentioning "India"
const filterIndiaDisasters = (data) => {
  return data.filter(report =>
    report.fields.title.toLowerCase().includes('india')
  );
};

// Controller function to handle fetching and filtering disaster data
export const getDisaterCity = async (req, res) => {
  try {
    const response = await axios.get(DISASTER_API_URL);
    console.log(response)

    // Filter the disasters to include only those mentioning "India"
    const filteredDisasters = filterIndiaDisasters(response.data.data);
    console.log(filteredDisasters)
    return res.status(200).json(filteredDisasters);
  } catch (error) {
    console.error('Error fetching disaster data:', error);
   return res.status(500).json({ error: 'Failed to fetch disaster data' });
  }
};


