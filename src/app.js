import express from 'express';
import morgan from 'morgan';
import pwdRoutes from './routes/pwd.routes';

const app = express();
app.set('port', 5000);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false})); // para recibir formularios html
app.use('/api/pwd',pwdRoutes);

export default app;