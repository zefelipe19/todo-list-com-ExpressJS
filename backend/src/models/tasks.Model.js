/* eslint-disable indent */
import conection from './conection.js'; // -> conexão no banco de dados

const getAllTasks = async () => {
	// faz uma consulta sql na tabela e retorna os objetos
	const tasks = await conection.execute('SELECT * FROM tasks');
    return tasks[0];
};

// Criando uma nova model
const createTask = async (task) => {
	// recebe a req.body da "view/controller"
	const {title} = task; // -> pega apenas a chave title da task
	const dateUTC = new Date(Date.now()).toUTCString(); // -> pegando a data atual em utf
	// executa uma inserção sql no banco de dados com o titulo e a data da task
	const [createdTask] = await conection.execute('INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]);
	return createdTask;
};

// Pegando uma task pela id
const getTask = async (id) => {
	const [taskDetaled] = await conection.execute('SELECT * FROM tasks WHERE id = ?', [id]);
	return taskDetaled;
};

// Deletando uma task pelo id
const deleteTask = async (id) => {
	const removedTask = await conection.execute('DELETE FROM tasks WHERE id = ?', [id]);
	return removedTask;
};

// Modificando uma task
const updateTask = async (id, task) => {
	const {title, status} = task;
	// UPDATE tasks SET title = "Tentando consertar um bug", status = "quase" WHERE id = 6
	const updatedTask = await conection.execute('UPDATE tasks SET title = ?, status = ? WHERE id = ?', [title, status, id]);
	return updatedTask;
};


// model com os metodos da task
const tasksModel = {
	getAllTasks,
	createTask,
	getTask,
	deleteTask,
	updateTask,
};
// Exportando a model
export default tasksModel;