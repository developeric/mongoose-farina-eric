import { Router } from "express";
import { createDirector } from "../controllers/director.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
export const routerDirector = Router();

routerDirector.post("/director",aplicarValidation,createDirector);
