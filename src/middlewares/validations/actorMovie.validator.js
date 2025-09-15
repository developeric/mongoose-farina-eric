import { body, param } from "express-validator";

//Create
export const createActoresMovieValidator = [
  body("actor")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío"),
];

//FindByID
export const findActoresMovieByPKValidator = [
  param("id").isMongoId().withMessage("Tiene que ser un MongoID"),
];

//Update
export const updateActoresMovieValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un entero")
    .notEmpty()
    .withMessage("No puede estar vacío"),
];

//Delete
export const deleteActoresMovieValidator = [
  param("id")
    .isMongoId()
    .withMessage("Tiene que ser un MongoID")
    .notEmpty()
    .withMessage("No puede Estar Vacío")
];
