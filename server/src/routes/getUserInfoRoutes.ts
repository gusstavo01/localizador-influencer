import express from 'express';
import {getUserInfo} from '../controllers/getUserInfoController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/api/getUserInfo', authMiddleware, getUserInfo);

export default router;