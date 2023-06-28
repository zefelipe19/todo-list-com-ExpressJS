import app from './app.js';
// import dotenv from 'dotenv';

// Importando as variáveis de ambiente
// const env = dotenv.config();
// Acessando as variáveis de ambiente -> nesse caso a porta
// const port = env;

app.listen(8000, () => console.log(`server ruining on port ${8000}...`));
