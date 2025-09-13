//importaciones
import express from "express";
import "dotenv/config";
import cors from "cors"
import cookieParser from "cookie-parser";
import { startDB } from "./src/config/database.js";
import { routes } from "./src/routes/index.js";

//app
const app = express();
const PORT = process.env.PORT;

//use
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use("/api", routes);

//Ejecución
app.listen(PORT, async () => {
  await startDB();
  console.log(`ejecutando en http://localhost:${PORT}`);
});
