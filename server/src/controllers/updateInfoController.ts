import { Request, Response } from 'express';
import { query } from '../config/database';

export const atualizarPerfil = async (req: Request, res: Response): Promise<void> => {
  try {
    const { telefone, experiencia, cep, estado, cidade, bairro } = req.body;
    let identification;
    let identifier;
    
    // Verifica se é um influenciador ou uma empresa
    if (req.body.cpf) {
      // Se for um influenciador, utiliza o CPF como identificação
      identification = 'cpf';
      identifier = req.body.cpf;
    } else if (req.body.cnpj) {
      // Se for uma empresa, utiliza o CNPJ como identificação
      identification = 'cnpj';
      identifier = req.body.cnpj;
    } else {
      // Caso não seja fornecido nem CPF nem CNPJ, retorna um erro
      res.status(400).json({ error: 'CPF ou CNPJ não fornecido' });
      return;
    }

    // Atualiza as informações do usuário no banco de dados usando a identificação (CPF ou CNPJ)
    await query(`UPDATE ${identification === 'cpf' ? 'influencer' : 'empresa'} SET telefone = $1, experiencia = $2, cep = $3, estado = $4, cidade = $5, bairro = $6 WHERE ${identification} = $7`, [telefone, experiencia, cep, estado, cidade, bairro, identifier]);

    res.status(200).json({ message: 'Perfil atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    res.status(500).json({ error: 'Erro ao atualizar perfil' });
  }
};
