import Report from '../modals/report.modal.js';

export const reportCon = async (req, res) => {
  try {
    const { address, disaster, status } = req.body;

    // Validation for required fields
    if (!address || !disaster || !status) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if status is valid
    if (!['ongoing', 'resolved'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value.' });
    }

    // Initialize imageUrl as null (optional)
    let imageUrl = null;

    // If file exists, get the Cloudinary URL
    if (req.file) {
      imageUrl = req.file.path; // Cloudinary URL of the uploaded image
    }

    // Create a new report with or without the imageUrl
    const newReport = new Report({ address, disaster, status, imageUrl });

    // Save the new report in the database
    await newReport.save();

    // Respond with success message and the saved data
    return res.status(201).json({
      message: 'Disaster report added successfully',
      data: newReport,
    });
  } catch (error) {
    console.error('Error adding report:', error);
    return res.status(500).json({ error: error.message || 'Unknown error occurred' });
  }
};
