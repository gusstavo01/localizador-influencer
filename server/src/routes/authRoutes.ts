import express from 'express';
import { loginUser } from '../controllers/authController';

const router = express.Router();

router.post('/api/login', loginUser);

export default router;
