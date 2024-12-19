import express from 'express';
import { getDisaterCity } from '../controller/disaster.controller.js';



const router = express.Router();

router.get('/disastercity', getDisaterCity);



export default router;
