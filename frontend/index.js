// Consumindo a API do backend
import axios from "axios";
const defaulUrl = "http://localhost:8000"

const getAllTasks = async () => {
    const allTasks = await axios.get(`${defaulUrl}/tasks`).then(res => res.data).catch(err => console.log(err))
    return allTasks
}

const getTask = async (id) => {
    const task = await axios.get(`${defaulUrl}/tasks/${id}`).then(res => res.data).catch(err => console.log(err))
    return task
}

// console.log('response => ', await getAllTasks())

console.log('response id 3 => ', await getTask(3))
