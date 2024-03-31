import { Request, Response } from 'express';
import { query } from '../config/database';
import {hashPassword} from '../services/authService';
import { User } from '../models/User';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { cpf, nomeCompleto, email, senha, telefone, cidade, estado, bairro,cep, dataNascimento } = req.body;

  try {
    // Verifica se já existe um usuário com o mesmo CPF
    const existingUser = await query('SELECT * FROM influencer WHERE cpf = $1', [cpf]);
    if (existingUser.rows.length > 0) {
      res.status(400).json({ message: 'Usuário com o CPF informado já existe' });
      return;
    }
    const existingEmail = await query(`SELECT * FROM influencer WHERE email = $1`,[email]);
    if(existingEmail.rows.length > 0) {
      res.status(400).json({ message: 'Usuário com o email informado já existe' });
      return;
    }
    const existingInfluencerByEmail = await query('SELECT * FROM empresa WHERE email = $1', [email]);
        if (existingInfluencerByEmail.rows.length > 0) {
            res.status(400).json({message: 'E-mail já está sendo usado por uma empresa'});
            return;
        }
    const hashedPassword = await hashPassword(senha);

    const newUser: User = {
      cpf,
      nomeCompleto,
      email,
      senha: hashedPassword,
      telefone,
      cidade,
      estado,
      bairro,
      cep,
      dataNascimento,
      tipo_id: 1,
    };

    await query('INSERT INTO influencer (cpf, nome_completo, email, senha, telefone, cidade, estado, bairro,cep, data_nascimento,tipo_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)', [
      newUser.cpf,
      newUser.nomeCompleto,
      newUser.email,
      newUser.senha,
      newUser.telefone,
      newUser.cidade,
      newUser.estado,
      newUser.bairro,
      newUser.cep,
      newUser.dataNascimento,
      newUser.tipo_id,
    ]);

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};
