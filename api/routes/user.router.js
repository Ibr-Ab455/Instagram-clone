import express from 'express';
import { tes } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/test", tes);

export default router;