import { Router } from "express";
import { createMovie, deleteMovie, findMovie, findMovieByPK, updateMovie } from "../controllers/movie.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createMovieValidator, deleteMovieValidator, findMovieByPKValidator, updateMovieValidator } from "../middlewares/validations/movie.validator.js";
export const routerMovie = Router()

routerMovie.post("/movie",createMovieValidator,aplicarValidation,createMovie)
routerMovie.put("/movie/:id",updateMovieValidator,aplicarValidation,updateMovie)
routerMovie.get("/movie",aplicarValidation,findMovie)
routerMovie.get("/movie/:id",findMovieByPKValidator,aplicarValidation,findMovieByPK)
routerMovie.delete("/movie/:id",deleteMovieValidator,aplicarValidation,deleteMovie)
