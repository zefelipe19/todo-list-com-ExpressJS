import express from 'express';
import tasksController from './controllers/tasksControllers.js';
import validateBody from './middlewares/TasksMiddleware.js';

const router = express.Router();

router.get('/', (req, res) => {res.send('Hello From ExpressJS');});

// Pegando todas as tasks do banco de dados
router.get('/tasks', tasksController.getAll);
// Enviando uma task via http post para criar uma nova task
router.post('/tasks', validateBody, tasksController.createTask);
// Pegando uma task pelo id
router.get('/tasks/:id', tasksController.getTask);
// Detelando uma task passando um id na url
router.delete('/tasks/:id', tasksController.deleteTask);
// Atualizando uma task passando um id pela url
router.put('/tasks/:id', tasksController.updateTask);

export default router;