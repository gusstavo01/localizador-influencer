import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import {consultarPerfil} from '../controllers/consultarPerfilController';

const router = express.Router();

router.get('/api/perfil/:nomePerfil', authMiddleware, consultarPerfil);

export default router;