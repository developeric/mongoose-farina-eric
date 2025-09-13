import { MovieModel } from "../models/movie.model.js";

////////////////////////////////////
//                                //
// ¡Claro! Aquí tienes tu codigo. //
//                                //
////////////////////////////////////

//Create
export const createMovie = async (req, res) => {
  const { name, year, lenguage, duration } = req.body;
  try {
    const movie = await MovieModel.create(req.body);
    if (!movie) {
      console.log(error);
      return res.status(400).json({ msg: "No se creó la Movie" });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Movie Creada Correctamente", data: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};

//Update
export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, year, lenguage, duration } = req.body;
  const movie = await MovieModel.findByIdAndUpdate(
    id, //busca por el id
    { name, year, lenguage, duration }, //los campos que deseemos poder actualizar
    { new: true }
  ); //para que aparezca objeto actualizado

  if (!movie) {
    return res.status(404).json({ msg: "No se ha Actualizado" });
  }
  return res
    .status(200)
    .json({ ok: true, msg: "Actualizaco Correctmente", data: movie });
};

//FindAll
export const findMovie = async (req, res) => {
  try {
    const movie = await MovieModel.find();
    if (!movie) {
      return res
        .status(404)
        .json({ msg: "No se ha pudo encontrar", data: null });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//FindByPK
export const findMovieByPK = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findById(id);
    if (!movie) {
      return res.status(404).json({ msg: "No se ha encontrado", data: null });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//Delete
export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await MovieModel.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ ok: true, mgs: "Movie Correctamente", data: movie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};
