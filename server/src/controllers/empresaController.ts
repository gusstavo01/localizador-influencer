import { Request, Response } from 'express';
import { query } from '../config/database';
import { Company } from '../models/Company';
import {hashPassword} from '../services/authService';


export const createCompany = async (req: Request, res: Response): Promise<void> => {
const {cnpj, razaoSocial,email,senha,telefone, cidade,estado,bairro,cep, dataCriacao} = req.body;

try {
    const existingCompany = await query('SELECT * FROM empresa WHERE cnpj = $1' , [cnpj]);
    if(existingCompany.rows.length > 0) {
        res.status(400).json({message:'Empresa com CNPJ já cadastrado'});
        return;
    }
    const existingEmail = await query(`SELECT * FROM empresa WHERE email = $1`,[email]);
    if(existingEmail.rows.length > 0) {
        res.status(400).json({message:'Usuário com email já cadastrado'});
        return;
    }
    const existingInfluencerByEmail = await query('SELECT * FROM influencer WHERE email = $1', [email]);
        if (existingInfluencerByEmail.rows.length > 0) {
            res.status(400).json({message: 'E-mail já está sendo usado por um influenciador'});
            return;
        }
    const hashedPassword = await hashPassword(senha);
    const newCompany: Company = {
        cnpj,
        razaoSocial,
        email,
        senha: hashedPassword,
        telefone,
        cidade,
        estado,
        bairro,
        cep,
        dataCriacao,
        tipo_id:2
    }
    await query('INSERT INTO empresa (cnpj, razao_social, email, senha, telefone, cidade, estado,cep, bairro, data_fundacao,tipo_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)', [
        newCompany.cnpj, 
        newCompany.razaoSocial, 
        newCompany.email, 
        newCompany.senha, 
        newCompany.telefone, 
        newCompany.cidade,
        newCompany.estado,
        newCompany.cep,
        newCompany.bairro,
        newCompany.dataCriacao,
        newCompany.tipo_id
    ]);
    res.status(201).json({ message: 'Usuário Empresa criado com sucesso' });
}catch(error) {
    console.log('Error ao criar usuário',error);
    res.status(500).json({ message: 'Erro ao criar usuário' });
}

}