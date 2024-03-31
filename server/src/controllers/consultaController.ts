import { Request, Response } from 'express';
import { query } from '../config/database';

export const consultaInfluencer = async (req: Request, res: Response): Promise<void> => {
    const { cep } = req.query;

    if (!cep) {
        res.status(400).json({ error: 'CEP é necessário para a consulta.' });
        return;
    }

    try {
        const result = await query('SELECT perfil, seguidores, seguindo FROM influencer WHERE cep = $1', [cep]);
        
        if (result.rows.length === 0) {
            res.status(404).json({ message: 'Nenhum influencer encontrado para o CEP fornecido.' });
            return;
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Erro ao consultar influencer:', error);
        res.status(500).json({ error: 'Erro ao realizar a consulta no banco de dados.' });
    }
};
