import { ActorModel } from "../models/actores.model.js";

////////////////////////////////////
//                                //
// ¡Claro! Aquí tienes tu codigo. //
//                                //
////////////////////////////////////

//Create
export const createActor = async (req, res) => {
  const { name, age, salary } = req.body;
  try {
    const actor = await ActorModel.create(req.body);
    if (!actor) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha creado", data: null });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Actor Creado Correctamente", data: actor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//Update
export const updateActor = async (req, res) => {
  const { id } = req.body;
  const { name, age, salary } = req.body;
  try {
    const actor = await ActorModel.findByIdAndUpdate(
      id,
      { name, age, salary },
      {
        new: true,
      }
    );
    if (!actor) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha Actualizado", data: null });
    }
    return res.status(201).json({
      ok: true,
      msg: "Actualizado Correctamente",
      data: actor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//FindAll
export const findActor = async (req, res) => {
  try {
    const actor = await ActorModel.find();
    if (!actor) {
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
export const findActorByPK = async (req, res) => {
  const { id } = req.body;
  try {
    const actor = await ActorModel.findById(id);
    if (!actor) {
      return res.status(404).json({ msg: "No encontrado", data: null });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Encontrado Correctamente", data: actor });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};

//Delete
export const deleteActor = async (req, res) => {
  const { id } = req.body;
  try {
    const actor = await ActorModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ ok: true, msg: "Borrado Correctamente", data: actor });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Error Server" });
  }
};