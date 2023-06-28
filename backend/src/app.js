import express from 'express';
import router from './router.js';

const app = express();
// Fazendo com que o express lide com os dados em json
app.use(express.json());
// Utilizando o router para lidar com as requisições
app.use(router); // -> urls da api

// Exportando o app
export default app;
