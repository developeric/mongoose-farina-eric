import { Router } from "express";
import { createDirector } from "../controllers/director.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createDirectorValidator } from "../middlewares/validations/director.validator.js";
export const routerDirector = Router();

routerDirector.post("/director",createDirectorValidator,aplicarValidation,createDirector);
