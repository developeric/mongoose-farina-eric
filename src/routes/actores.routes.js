import { Router } from "express";
import { createActor } from "../controllers/actores.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
export const routerActor = Router();

routerActor.post("/actor",aplicarValidation,createActor);
