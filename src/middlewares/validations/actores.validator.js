import { body, param } from "express-validator";

export const createActoresValidator = [
  body("name")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 Caracteres"),
  body("age")
    .notEmpty()
    .withMessage("este Campo no puede estar Vacío")
    .isInt({ min: 0 })
    .withMessage("Tiene que ser un Entero"),
  body("salary")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
];
