//exportamos todas las rutas en un archivo para mas orden en el app.js

import { Router } from "express";
import { routerActor } from "./actores.routes.js";
import { routerDirector } from "./director.routes.js";
import { routerGuion } from "./guion.routes.js";
import { routerMovie } from "./movie.routes.js";
import { routerActorMovie } from "./actoresMovie.routes.js";

export const routes = Router();

routes.use(routerActor);
routes.use(routerDirector);
routes.use(routerGuion);
routes.use(routerMovie);
routes.use(routerActorMovie);
