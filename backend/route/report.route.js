// routes/disasterRoutes.js
import express from 'express'
import { reportCon } from '../controller/report.controller.js';


const router = express.Router();

router.post('/addReport', reportCon);

export default router;