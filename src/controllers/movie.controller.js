import { MovieModel } from "../models/pelicula.model.js";

export const createMovie = async (req, res) => {
  const { name, year, lenguage, duration } = req.body;
  try {
    const newMovie = await MovieModel.create(req.body);
    if (!newMovie) {
      console.log(error);
      return res.status(400).json({ msg: "No se creó la Movie" });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Movie Creada Correctamente", data: newMovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};
