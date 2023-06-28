import express from 'express';
import tasksController from './controllers/tasksControllers.js';

const router = express.Router();

// Pegando todas as tasks do banco de dados
router.get('/tasks', tasksController.getAll);
// Enviando uma task via http post para criar uma nova task
router.post('/tasks', tasksController.createTask);

export default router;