import { ForumModel } from "../models/Forums.js"

// const alumnos = [
//     {
//         nombre:"Juan",
//         apellido:"Perez"
//     },
//     {
//         nombre:"Pedro",
//         apellido:"Gomez"
//     },
//     {
//         nombre:"Maria",
//         apellido:"Lopez"
//     },
// ]

//controlador ejemplo para mostrar la vista

// export const ctrlEjemplo = (req, res) => {
//     res.render('index.ejs', {title: "ahora es un titulo", alumnos})
// }

//controlador para mostrar la vista

export const ctrlView = async (req, res) => {
    try {
        const forums = await ForumModel.findAll();
            res.render('forums.ejs',{forums})

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para traer todas las tareas
export const ctrlGetForums = async (req,res) => {
    try {
        const forum = await ForumModel.findAll();
        if(!forum) return res.status(404)
            return res.status(200).json(forum)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para crear una tarea
export const ctrlCreateForum = async (req,res) => {
    try {
        const newForum = await ForumModel.create(req.body)
        return res.status(201).json(newForum)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
        message: 'Error Server'
        })
    }
}

//controlador para modificar una tarea
export const ctrlUpdateForum = async (req,res) => {
    const { id } = req.params
    try {
        const forum = await ForumModel.findByPk(id)
        if(!forum) {
            return res.status(404).json({
                message: 'Tarea no Encontrada'
            })
        }
        forum.update(req.body)
        return res.status(200).json(forum)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error server"
        })   
    }
}

//controlador para eliminar una tarea
export const ctrlDeleteForum = async (req,res) => {
    const { id } = req.params
    try {
        const forumDeleted = await ForumModel.destroy({
            where: { 
                id: id 
            }
        })
        if(!forumDeleted){
            return res.status(404).json({
                message: 'Tarea no Encontrada'
            })
        }
        return res.status(200).json({
            message: 'Tarea Eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: "Error server"
        })        
    }
}