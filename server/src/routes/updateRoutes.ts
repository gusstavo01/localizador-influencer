import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import {atualizarPerfil} from '../controllers/updateInfoController';

const router = express.Router();
router.put('/api/meu-perfil',authMiddleware, atualizarPerfil);
export default router;