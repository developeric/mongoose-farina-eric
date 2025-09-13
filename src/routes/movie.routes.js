import { Router } from "express";
import { createMovie } from "../controllers/movie.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createMovieValidator } from "../middlewares/validations/movie.validator.js";
export const routerMovie = Router()

routerMovie.post("/movie",createMovieValidator,aplicarValidation,createMovie)