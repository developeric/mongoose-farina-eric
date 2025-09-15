import { DirectorModel } from "../models/director.model.js";

////////////////////////////////////
//                                //
// ¡Claro! Aquí tienes tu codigo. //
//                                //
////////////////////////////////////

//Create
export const createDirector = async (req, res) => {
  const { name, age, movies, extraData } = req.body;
  const { married, dni, firtsMovie } = extraData;
  try {
    const director = await DirectorModel.create(req.body);
    if (!director) {
      console.log(error);
      return res.status(400).json({ msg: "No se ha creado", data: null });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Director Creado Correctamente", data: director });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};

//Update
export const updateDirector = async (req, res) => {
  const { id } = req.params;
  const { name, age, movies, extraData } = req.body;
  const { married, dni, firstMovie } = extraData;
  try {
    const director = await DirectorModel.findByIdAndUpdate(
      id,
      { name, age, movies, extraData, married, dni, firstMovie },
      { new: true }
    );
    if (!director) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha Actualizado", data: null });
    }
    return res.status(201).json({
      ok: true,
      msg: "Actualizado Correctamente",
      data: director,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//FindAll
export const findDirector = async (req, res) => {
  try {
    const director = await DirectorModel.find();
    if (!director) {
      return res.status(400).json({ msg: "No Encontrado", data: null });
    }
    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: director });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

//FindByPK
export const findDirectorByPK = async (req, res) => {
  const { id } = req.params;
  try {
    const director = await DirectorModel.findById(id);
    if (!director) {
      return res.status(404).json({ msg: "No encontrado", data: null });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Encontrado Correctamente", data: director });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//Delete
export const deleteDirector = async (req, res) => {
  const { id } = req.params;
  try {
    const director = await DirectorModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Borrado Correctamente", data: director });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};
