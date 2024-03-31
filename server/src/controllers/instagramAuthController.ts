import { Request, Response } from 'express';
import { query } from '../config/database';

export const userInstagram = async (req:Request, res:Response): Promise<void> => {
    try {
    const { perfil, seguidores, seguindo} = req.body; 
    const cpf = req.body.cpf; 
    if (!cpf) {
        res.status(400).json({ error: 'CPF não encontrado no token de autenticação' });
        return;
      }
   
      await query(`UPDATE influencer SET perfil = $1, seguidores = $2, seguindo = $3 WHERE cpf = $4`, [perfil, seguidores, seguindo, cpf]);

        res.status(200).json({ message: 'Dados do influenciador inseridos com sucesso' });
    }catch(error) {
        console.error('Erro ao inserir dados do influenciador:', error);
        res.status(500).json({ error: 'Erro ao inserir dados do influenciador' });
    }
}