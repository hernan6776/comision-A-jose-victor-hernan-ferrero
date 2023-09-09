import { Router } from "express";

const taskRouter = Router();

// endpoint para traer todas las tareas
taskRouter.get('/api/tasks', () => {

})

// endpoint para crear una tarea
taskRouter.post('/api/tasks',() => {
    
})

// endpoint para modificar una tarea
taskRouter.put('/api/:id')

// endpoint para eliminar una tarea
taskRouter.delete('/api/:id')