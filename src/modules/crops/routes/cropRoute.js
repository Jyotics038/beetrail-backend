import express from 'express';
import { createCrop, getNearbyCropOpportunities } from '../controller/cropController.js';

const router = express.Router();
router.post('/', createCrop);
router.get('/nearby', getNearbyCropOpportunities);

export default router;
