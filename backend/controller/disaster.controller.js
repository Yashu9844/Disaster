import axios from 'axios';

const DISASTER_API_URL = "https://api.reliefweb.int/v1/disasters?appname=vocabulary&preset=external&limit=1000";

// Function to filter reports mentioning "India"
const filterIndiaDisasters = (data) => {
  // Ensure the data is an array of reports
  return data.filter(report =>
   
 (report.fields.name).includes('India')

  );
};

// Controller function to handle fetching and filtering disaster data
export const getDisaterCity = async (req, res) => {
  try {
    const response = await axios.get(DISASTER_API_URL);
    // console.log(response.data); // Log the response data for inspection

    // Filter the disasters to include only those mentioning "India"
    // console.log(response.data.data)
    const filteredDisasters = filterIndiaDisasters(response.data.data); // Accessing the "data" array in the response
    console.log(filteredDisasters); // Log the filtered disasters

    // Return the filtered disasters
    return res.status(200).json(filteredDisasters);
  } catch (error) {
    console.error('Error fetching disaster data:', error);
    return res.status(500).json({ error: 'Failed to fetch disaster data' });
  }
};

