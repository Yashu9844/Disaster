// routes/disasterRoutes.js
import express from 'express'
import { reportCon } from '../controller/report.controller.js';
import upload from '../utils/multer.js';


const router = express.Router();


router.post('/addReport', upload.single('image'), reportCon);
export default router;