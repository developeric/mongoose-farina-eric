import { Router } from "express";
import { createActor, deleteActor, findActor, findActorByPK, updateActor } from "../controllers/actores.controller.js";
import { aplicarValidation } from "../middlewares/validator.js";
import { createActoresValidator, deleteActoresValidator, findActoresByPKValidator, updateActoresValidator } from "../middlewares/validations/actores.validator.js";
export const routerActor = Router();

routerActor.post("/actores",createActoresValidator,aplicarValidation,createActor);
routerActor.put("/actores/:id",updateActoresValidator,aplicarValidation,updateActor)
routerActor.get("/actores",aplicarValidation,findActor)
routerActor.get("/actores/:id",findActoresByPKValidator,aplicarValidation,findActorByPK)
routerActor.delete("/actores/:id",deleteActoresValidator,aplicarValidation,deleteActor)
