import { query } from '../config/database';
import bcrypt from 'bcrypt';

class Influencer {
    static async findByEmail(email:string) {
        try {
            const result = await query('SELECT * FROM influencer WHERE email = $1', [email]);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao encontrar influenciador por email:', error);
            throw error;
        }
    }

    static async findByCPF(cpf:string) {
        try {
            const result = await query('SELECT * FROM influencer WHERE cpf = $1', [cpf]);
            return result.rows[0];
        }catch(error) {
            console.error('Erro ao encontrar influenciador por CPF:', error);
            throw error;
        }
    }

    static async verifyPassword(email: string, senha: string): Promise<boolean> {
        try {
            const influenciador = await this.findByEmail(email);
            if (influenciador) {
                // Verificar a senha
                const senhaCorreta = await bcrypt.compare(senha, influenciador.senha);
                return senhaCorreta;
            } else {
                return false; 
            }
        } catch (error) {
            console.error('Erro ao verificar senha do influenciador:', error);
            throw error;
        }
    }
}

export default Influencer;
