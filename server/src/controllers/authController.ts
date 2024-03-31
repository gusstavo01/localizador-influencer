// authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Empresa from '../models/EmpresaConsulta';
import Influencer from '../models/InfluencerConsulta';

export const loginUser = async (req: Request, res: Response): Promise<void> =>{
    const { email, senha } = req.body;

    try {
        // Verificar se o usuário é um Influenciador
        const influenciador = await Influencer.verifyPassword(email, senha);
        if (influenciador === true) {
            const influenciadorData = await Influencer.findByEmail(email);
            if (influenciadorData) {
                // Gerar token JWT para o influenciador
                const token = jwt.sign({ cpf: influenciadorData.cpf, tipo: 'influenciador' }, process.env.KEY, { expiresIn: '1h' });
                res.status(200).json({ redirectTo: '/dashboard', token });
                return;
            }
        }

        // Verificar se o usuário é uma Empresa
        const empresa = await Empresa.verifyPassword(email, senha);
        if (empresa === true) {
            const empresaData = await Empresa.findByEmail(email);
            if (empresaData) {
                // Gerar token JWT para a empresa
                const token = jwt.sign({ cnpj: empresaData.cnpj, tipo: 'empresa' }, process.env.KEY, { expiresIn: '1h' });
                res.status(200).json({ redirectTo: '/dashboard', token });
                return;
            }
        }

        // Usuário não encontrado ou senha incorreta
        res.status(404).json({ error: 'Usuário não encontrado ou senha incorreta.' });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro ao fazer login.' });
    }
}
