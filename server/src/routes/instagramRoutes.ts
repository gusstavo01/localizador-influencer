import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { userInstagram } from '../controllers/instagramAuthController';

const router = express.Router();

// Rota para confirmar a conta do Instagram
router.put('/api/confirmar-instagram',authMiddleware, userInstagram);

export default router;
