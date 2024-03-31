import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import {consultaInfluencer }from '../controllers/consultaController';

const router = express.Router();

router.get('/api/consulta-cep',authMiddleware, consultaInfluencer);

export default router;