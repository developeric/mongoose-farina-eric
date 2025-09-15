import { GuionModel } from "../models/guion.model.js";

////////////////////////////////////
//                                //
// ¡Claro! Aquí tienes tu codigo. //
//                                //
////////////////////////////////////

//Create
export const createGuion = async (req, res) => {
  const { lenguage, author, year } = req.body;
  try {
    const guion = await GuionModel.create(req.body);
    if (!guion) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha creado", data: null });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Guion Creado Correctamente", data: guion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};

//Update
export const updateGuion = async (req, res) => {
  const { id } = req.params;
  const { lenguage, author, year } = req.body;
  try {
    const guion = await GuionModel.findByIdAndUpdate(
      id,
      { lenguage, author, year },
      { new: true }
    );
    if (!guion) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha Actualizado", data: null });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Actualizado Correctamente", data: guion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};

//FindAll
export const findGuion = async (req, res) => {
  try {
    const guion = await GuionModel.find().populate({
      path: "pelicula",
      select: "name year lenguage duration actores",
      populate: { path: "actores"},
    });
    if (!guion) {
      return res
        .status(404)
        .json({ msg: "No se ha pudo encontrar", data: null });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: guion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//FindByPK
export const findGuionByPK = async (req, res) => {
  const { id } = req.params;
  try {
    const guion = await GuionModel.findById(id);
    if (!guion) {
      return res.status(404).json({ msg: "No se ha encontrado", data: null });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Obtenido Correctamente", data: guion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//Delete
export const deleteGuion = async (req, res) => {
  const { id } = req.params;
  try {
    const guion = await GuionModel.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ ok: true, mgs: "guion Correctamente", data: guion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};
