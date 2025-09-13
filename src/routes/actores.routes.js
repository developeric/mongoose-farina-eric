import { Router } from "express";
import { createActor } from "../controllers/actores.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createActoresValidator } from "../middlewares/validations/actores.validator.js";
export const routerActor = Router();

routerActor.post("/actor",createActoresValidator,aplicarValidation,createActor);
