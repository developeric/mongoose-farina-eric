import { body, param } from "express-validator";
import { DirectorModel } from "../../models/director.model.js";

export const createDirectorValidator = [
  body("name")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isString()
    .withMessage("Este Campo tiene que ser un String")
    .isLength({ min: 2, max: 255 })
    .withMessage("Tiene que contener entre 2-255 caracteres"),
  body("age")
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),
  body("movies")
    .optional()
    .notEmpty()
    .withMessage("Este Campo no puede estar Vacío")
    .isInt()
    .withMessage("Este Campo tiene que ser un Entero"),

  body("extraData")
    .isArray()
    .withMessage("Tiene que ser un Array")
    .notEmpty()
    .withMessage("No puede estar vacío"),

  body("extraData.*.married") //sirve para acceder a las propiedades del Extradata
    .isBoolean()
    .withMessage("Tiene que ser True o False")
    .notEmpty()
    .withMessage("Este campo no puede estar vacío"),

  body("extraData.*.dni")
    .notEmpty()
    .withMessage("No puede estar vacío")
    .isInt()
    .withMessage("Tiene que ser un Entero")
    .custom(async (dni) => {
      const unico = await DirectorModel.findOne({ "extraData.dni": dni });
      if (unico) {
        return res.status(400).json({ msg: "Ya existe un DNI identico" });
      }
      return true;
    }),

  body("extraData.*.firstMovie")
    .notEmpty()
    .withMessage("No puede Estar vacío")
    .isString()
    .withMessage("Este campo tiene que ser un String")
    .custom(async (firstMovie) => {
      const unico = await DirectorModel.findOne({
        "extraData.firstMovie": firstMovie,
      });
      if (unico) {
        return res
          .status(400)
          .json({ msg: "Un director no pueden producir la misma Movie" });
      }
      return true;
    }),
];
