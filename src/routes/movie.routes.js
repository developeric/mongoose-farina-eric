import { Router } from "express";
import { createMovie } from "../controllers/movie.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
export const routerMovie = Router()

routerMovie.post("/movie",aplicarValidation,createMovie)