/* eslint-disable indent */
import conection from './conection.js'; // -> conexão no banco de dados

const getAllTasks = async () => {
	// faz uma consulta sql na tabela e retorna os objetos
	const tasks = await conection.execute('SELECT * FROM tasks');
	console.log(tasks);
    return tasks[0];
};

// criando uma nova model
const createTask = async (task) => {
	// recebe a req.body da "view/controller"
	const {title} = task; // -> pega apenas a chave title da task
	const dateUTC = new Date(Date.now()).toUTCString(); // -> pegando a data atual em utf
	// executa uma inserção sql no banco de dados com o titulo e a data da task
	const [createdTask] = await conection.execute('INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]);
	return createdTask;
};

// model com os metodos da task
const tasksModel = {
	getAllTasks,
	createTask,
};
// Exportando a model
export default tasksModel;