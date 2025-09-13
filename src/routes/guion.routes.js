import { Router } from "express";
import { createGuion } from "../controllers/guion.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
export const routerGuion = Router()

routerGuion.post("/guion",aplicarValidation,createGuion)