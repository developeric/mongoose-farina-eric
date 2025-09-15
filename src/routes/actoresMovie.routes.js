import { Router } from "express";
import { createActoresMovieValidator, deleteActoresMovieValidator, findActoresMovieByPKValidator, updateActoresMovieValidator } from "../middlewares/validations/actorMovie.validator.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createActorMovie, deleteActorMovie, findActorMovie, findActorMovieByPK, updateActorMovie } from "../controllers/actoresMovie.controllers.js";

export const routerActorMovie = Router();

routerActorMovie.post("/actormovie",createActoresMovieValidator,aplicarValidation,createActorMovie)
routerActorMovie.put("/actormovie/:id",updateActoresMovieValidator,aplicarValidation,updateActorMovie)
routerActorMovie.get("/actormovie",aplicarValidation,findActorMovie)
routerActorMovie.get("/actormovie/actor/:id/movie/:id",findActoresMovieByPKValidator,aplicarValidation,findActorMovieByPK)
routerActorMovie.delete("/actormovie/:id",deleteActoresMovieValidator,aplicarValidation,deleteActorMovie)