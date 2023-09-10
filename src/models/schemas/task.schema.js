import { body } from "express-validator";

export const createTaskSchema = [
    body('title')
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
    body('description')
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
    body('poster')
        .isString().withMessage('Debe ser un String')
        .notEmpty().withMessage('No debe ser vacio'),
]