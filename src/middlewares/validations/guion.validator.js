import { body, param } from "express-validator";
import { GuionModel } from "../../models/guion.model.js";

//Create
export const createGuionValidator = [
  body("lenguage")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  ,
  body("author")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  ,
  body("year")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
  ,
];

//Update
export const updateGuionValidator = [
  body("lenguage")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  ,
  body("author")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  ,
  body("age")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
  ,
];

//FindByID
export const findGuionByPKValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío")
    .custom(async (id) => {
      const existente = await GuionModel.findById(id);
      if (!existente) {
        return res.status(404).json({ msg: "No encontrado" });
      }
      return true;
    }),
];

//Delete
export const deleteGuionValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío")
    .custom(async (id) => {
      const existente = await GuionModel.findById(id);
      if (!existente) {
        return res.status(404).json({ msg: "No encontrado" });
      }
      return true;
    }),
];
