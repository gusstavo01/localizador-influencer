// userController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Influencer from '../models/InfluencerConsulta';
import Empresa from '../models/EmpresaConsulta';

export const getUserInfo = async (req: Request, res: Response): Promise<any> => {
  try {
    // Extrair o token JWT do cabeçalho de autorização
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      res.status(401).json({ error: 'Token não fornecido. Faça login para acessar.' });
      return;
    }
    
    // Verificar e decodificar o token JWT
    const decodedToken = jwt.verify(token, process.env.KEY) as { cpf?: string, cnpj?: string, tipo: string };
    if (!decodedToken.tipo) {
      res.status(401).json({ error: 'Tipo de usuário não especificado no token JWT.' });
      return;
    }

    // Determinar o tipo de usuário e usar o identificador (CPF ou CNPJ) para buscar as informações específicas do usuário
    let user;
    if (decodedToken.tipo === 'influenciador' && decodedToken.cpf) {
      user = await Influencer.findByCPF(decodedToken.cpf);
    } else if (decodedToken.tipo === 'empresa' && decodedToken.cnpj) {
      user = await Empresa.findByCNPJ(decodedToken.cnpj);
    } else {
      res.status(401).json({ error: 'Tipo de usuário ou identificador inválido.' });
      return;
    }

    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado.' });
      return;
    }

    // Se o usuário for encontrado, envie os dados do usuário como resposta
    res.json(user);
  } catch (error) {
    console.error('Erro ao obter informações do usuário:', error);
    res.status(500).json({ error: 'Erro ao obter informações do usuário.' });
  }
};
