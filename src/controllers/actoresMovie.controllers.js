import { ActorMovieModel } from "../models/actoresMovie.js";

////////////////////////////////////
//                                //
// ¡Claro! Aquí tienes tu codigo. //
//                                //
////////////////////////////////////

//Create
export const createActorMovie = async (req, res) => {
  const { actores, movies } = req.body;
  try {
    const actormovie = await ActorMovieModel.create(req.body);
    if (!actormovie) {
      return res.status(400).json({ msg: "No Creado", data: null });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: actormovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};

//Update
export const updateActorMovie = async (req, res) => {
  const { id } = req.params;
  const { actores, movies } = req.body;
  try {
    const actormovie = await ActorMovieModel.findByIdAndUpdate(
      id,
      {
        actores,
        movies,
      },
      { new: true }
    );
    if (!actormovie) {
      return res.status(400).json({ msg: "No Creado", data: null });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Creado Correctamente", data: actormovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};

//FindAll
export const findActorMovie = async (req, res) => {
  try {
    const actormovie = await ActorMovieModel.find().populate("actores movies");
    if (!actormovie) {
      return res
        .status(404)
        .json({ msg: "No Hay Ningun Actor/Movie", data: null });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Encontrados Correctamente", data: actormovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

//FindByID
export const findActorMovieByPK = async (req, res) => {
  const { id } = req.params;
  const actormovie = await ActorMovieModel.findById(id);
  if (!actormovie) {
    return res.status(404).json({ msg: "No Encontrado", data: null });
  }
  return res
    .status(200)
    .json({ ok: true, msg: "Encontrado Correctamente", data: actormovie });
};

//Delete
export const deleteActorMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const actormovie = await ActorMovieModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, mgs: "Se Eliminó Correctamente", data: actormovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};
