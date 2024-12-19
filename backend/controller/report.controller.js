import Report from "../modals/report.modal.js";

export const reportCon = async(req,res,next) => {
    try {


        const { address, disaster, status } = req.body;
  
        // Validation
        if (!address || !disaster || !status) {
          return res.status(400).json({ message: 'All fields are required.' });
        }
      
        if (!['ongoing', 'resolved'].includes(status)) {
          return res.status(400).json({ message: 'Invalid status value.' });
        }
     
        const newReport = new Report({address,disaster,status})
    await newReport.save();
    return res.status(201).json({ message: 'Disaster added successfully', data: newReport });
    }
    catch (error) {
        console.error("Error details:", error); // Logs full error stack
        return res.status(500).json({ "error in modal": error.message || "Unknown error occurred" });
      }
}