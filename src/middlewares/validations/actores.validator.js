import { body, param } from "express-validator";
import { ActorModel } from "../../models/actor.model.js";

//Create
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

//Update
export const updateActoresValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 Caracteres"),
  body("age")
    .optional()
    .notEmpty()
    .withMessage("este Campo no puede estar Vacío")
    .isInt({ min: 0 })
    .withMessage("Tiene que ser un Entero"),
  body("salary")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
];

//FindByID
export const findActoresByPKValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío")
    .custom(async (id) => {
      const existente = await ActorModel.findById(id);
      if (!existente) {
        return res.status(404).json({ msg: "No encontrado" });
      }
      return true;
    }),
];

//Delete
export const deleteActoresValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío")
    .custom(async (id) => {
      const existente = await ActorModel.findById(id);
      if (!existente) {
        return res.status(404).json({ msg: "No encontrado" });
      }
      return true;
    }),
];
