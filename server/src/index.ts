import express from 'express';
import userRoutes from './routes/userRoutes';
import companyRoutes from './routes/companyRoutes';
import instagramRoute from './routes/instagramRoutes';
import authRoutes from './routes/authRoutes';
import getUserInfo  from './routes/getUserInfoRoutes';
import updateRoutes from './routes/updateRoutes';
import consultaRoutes from './routes/consultaRoutes';
import consultarPerfilRoutes  from './routes/consultarPerfilRoutes';
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(userRoutes);
app.use(companyRoutes);
app.use(instagramRoute);
app.use(authRoutes);
app.use(getUserInfo);
app.use(updateRoutes);
app.use(consultaRoutes);
app.use(consultarPerfilRoutes);
const PORT = process.env.PORT || 3000; // Usa a variável de ambiente PORT ou, se não estiver definida, usa a porta 3000 como padrão

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

export default app;