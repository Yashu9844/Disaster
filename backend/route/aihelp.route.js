import express from 'express';
import { getDisasterResponse } from '../controller/aihelp.controller.js';


const router = express.Router();

router.post('/research', getDisasterResponse);

export default router;
