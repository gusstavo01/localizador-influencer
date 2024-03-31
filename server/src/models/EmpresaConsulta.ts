import { query } from '../config/database';
import bcrypt from 'bcrypt';

class Empresa {
    static async findByEmail(email:string) {
        try {
            const result = await query('SELECT * FROM empresa WHERE email = $1', [email]);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao encontrar empresa por email:', error);
            throw error;
        }
    }
    static async findByCNPJ(cnpj: string) {
        try {
            const result = await query('SELECT * FROM empresa WHERE cnpj = $1', [cnpj]);
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao encontrar empresa por CNPJ:', error);
            throw error;
        }
    }

    static async verifyPassword(email: string, senha: string): Promise<boolean> {
        try {
            const empresa = await this.findByEmail(email);
            if (empresa) {
                // Verificar a senha
                const senhaCorreta = await bcrypt.compare(senha, empresa.senha);
                return senhaCorreta;
            } else {
                return false; // Se o e-mail não existir, a senha também está incorreta
            }
        } catch (error) {
            console.error('Erro ao verificar senha da empresa:', error);
            throw error;
        }
    }
}

export default Empresa;
