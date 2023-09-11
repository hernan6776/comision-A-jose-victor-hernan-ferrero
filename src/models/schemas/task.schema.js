import { body } from "express-validator";

export const createTaskSchema = [
    body('title')
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
    body('description')
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
    body('poster')
        .isURL().withMessage('Ingrese una URL valida')
        .notEmpty().withMessage('No debe ser vacio'),
]


export const editTaskSchema = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
    body('description')
        .optional()
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
    body('poster')
        .optional()
        .isURL().withMessage('Ingrese una URL valida')
        .notEmpty().withMessage('No debe ser vacio'),
]