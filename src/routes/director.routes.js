import { Router } from "express";
import { createDirector, deleteDirector, findDirector, findDirectorByPK, updateDirector } from "../controllers/director.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createDirectorValidator, deleteDirectorValidator, findDirectorByPKValidator, updateDirectorValidator } from "../middlewares/validations/director.validator.js";
export const routerDirector = Router();

routerDirector.post("/director",createDirectorValidator,aplicarValidation,createDirector);
routerDirector.put("/director/:id",updateDirectorValidator,aplicarValidation,updateDirector);
routerDirector.get("/director",aplicarValidation,findDirector);
routerDirector.get("/director/:id",findDirectorByPKValidator,aplicarValidation,findDirectorByPK);
routerDirector.delete("/director/:id",deleteDirectorValidator,aplicarValidation,deleteDirector);
