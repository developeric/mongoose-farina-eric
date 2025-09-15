import { Router } from "express";
import { createGuion, deleteGuion, findGuion, findGuionByPK, updateGuion } from "../controllers/guion.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createGuionValidator, deleteGuionValidator, findGuionByPKValidator, updateGuionValidator } from "../middlewares/validations/guion.validator.js";
export const routerGuion = Router()

routerGuion.post("/guion",createGuionValidator,aplicarValidation,createGuion)
routerGuion.put("/guion",updateGuionValidator,aplicarValidation,updateGuion)
routerGuion.get("/guion",aplicarValidation,findGuion)
routerGuion.get("/guion/:id",findGuionByPKValidator,aplicarValidation,findGuionByPK)
routerGuion.delete("/guion",deleteGuionValidator,aplicarValidation,deleteGuion)