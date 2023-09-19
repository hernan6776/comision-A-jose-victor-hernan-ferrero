import { Router } from "express";
import { ctrlCreateForum, ctrlDeleteForum, ctrlGetForums, ctrlUpdateForum, ctrlView } from "../controllers/forum.controllers.js";
import { createForumSchema, editForumSchema } from "../models/schemas/forum.schema.js";
import { validator } from "../middlewares/validator.js";
import { ForumModel } from "../models/Forums.js";


const forumRouter = Router();

//RUTA PARA LA VISTA
forumRouter.get('/forums',ctrlView)

// endpoint para traer todas las tareas
forumRouter.get('/api/forums', ctrlGetForums)

// endpoint para crear una tarea
forumRouter.post('/api/forums', createForumSchema, validator, ctrlCreateForum)

// endpoint para modificar una tarea
forumRouter.put('/api/forums/:id', editForumSchema, validator, ctrlUpdateForum)

// endpoint para eliminar una tarea
forumRouter.delete('/api/forums/:id', ctrlDeleteForum)

export { forumRouter } 