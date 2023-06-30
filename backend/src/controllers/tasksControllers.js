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

const getTask = async (req, res) => {
    // Pegando a task pelo id da model enviada pela url e restornando em json
    const {id} = req.params;
    const task = await tasksModel.getTask(id);
    return res.status(200).json(task);
};

const deleteTask = async (req, res) => {
    // Deletando a task cujo id foi passado na url
    const {id} = req.params;
    await tasksModel.deleteTask(id);
    return res.status(204).json();
};


const updateTask = async (req, res) => {
    // Atualizando os dados de uma task cujo id foi passado na url e as infos em json
    const {id} = req.params;
    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
};


// Todos os metodos das "views"
const tasksController = {
    getAll,
    createTask,
    getTask,
    deleteTask,
    updateTask,
};

export default tasksController;