import express from 'express';
import { createCompany } from '../controllers/empresaController';


const router = express.Router();

router.post('/api/createCompany', createCompany);

export default router;