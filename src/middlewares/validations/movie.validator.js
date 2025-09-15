import { body, param } from "express-validator";
import { MovieModel } from "../../models/movie.model.js";

//Create
export const createMovieValidator = [
  body("name")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  body("year")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
  body("lenguage")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  body("duration")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero (minutos)"),
];

//Update
export const updateMovieValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  body("year")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
  body("lenguage")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  body("duration")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero (minutos)"),
];

//FindByID
export const findMovieByPKValidator = [
  param("id")
      .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío")
    .notEmpty()
    .withMessage("No puede estar Vacío")
    .custom(async (value) => {
      const existe = await MovieModel.findById(value);
      if (!existe) {
        return res.status(404).json({ msg: "No se ha Encontrado" });
      }
      return true;
    }),
];

//Delete
export const deleteMovieValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .custom(async (id) => {
      const existente = await MovieModel.findById(id);
      if (!existente) {
        return res.status(404).json({ msg: "No encontrado" });
      }
      return true;
    }),
];
