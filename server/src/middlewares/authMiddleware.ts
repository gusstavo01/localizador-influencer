// No seu controlador de usuário (userController.ts)
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

// Interface para o payload do token JWT
interface JwtPayload {
  cpf?: string;
  cnpj?: string;
  // Adicione outras propriedades do token, se necessário
}

// Middleware para autenticar e autorizar usuários
const authMiddleware: RequestHandler = (req, res, next) => {
  // Verificar se o token está presente no cabeçalho de autorização
  const token = req.headers.authorization?.split(' ')[1]; // Extrair o token do cabeçalho

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido. Faça login para acessar.' });
  }

  try {
    // Verificar e decodificar o token JWT
    const decoded = jwt.verify(token, process.env.KEY) as JwtPayload;

    // Adicionar o CPF ou CNPJ do usuário decodificado ao objeto de solicitação
    if (decoded.cpf) {
      (req as any).cpf = decoded.cpf;
    } else if (decoded.cnpj) {
      (req as any).cnpj = decoded.cnpj;
    }

    // Prossiga para a próxima middleware
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido. Faça login novamente.' });
  }
};

export default authMiddleware;
