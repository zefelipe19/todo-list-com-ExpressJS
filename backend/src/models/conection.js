import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';

// const env = dotenv.config();
// const localEnv = {
// 	host: env.MYSQL_HOST,
// 	user: env.MYSQL_USER,
// 	password: env.MYSQL_PASSWORD,
// 	database: env.MYSQL_DB,
// };

const conection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'todolist',
});

export default conection;