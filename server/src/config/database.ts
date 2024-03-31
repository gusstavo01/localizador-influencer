import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

const query = async (text: string, params: any[]) => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    throw new Error(`Erro na execução da consulta: ${error.message}`);
  }
};

export { pool, query }; // Exporta o pool juntamente com a função query