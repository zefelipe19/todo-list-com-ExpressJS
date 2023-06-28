/* eslint-disable indent */
import tasksModel from '../models/tasks.Model.js'; // -> seria como as models do django

const getAll = async (req, res) => {
    // listando todas as tasks em um array de objetos
    const tasks = await tasksModel.getAllTasks();
    return res.status(200).json(tasks); // -> todas as tasks são enviadas em formatos json
};

const createTask = async (req, res) => {
    // enviando a requisição para a model
    const createdTask = await tasksModel.createTask(req.body);
    return res.status(201).json(createdTask); // -> retornando o objeto criado http status 201
};

// Todos os metodos das "views"
const tasksController = {
    getAll,
    createTask,
};

export default tasksController;