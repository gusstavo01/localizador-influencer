import express from 'express';
import { createUser } from '../controllers/userController';

const router = express.Router();

router.post('/api/createUser', createUser);

export default router;