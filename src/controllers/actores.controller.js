import { ActorModel } from "../models/actores.model.js";

export const createActor = async (req, res) => {
  const { name, age, salary } = req.body;
  try {
    const actor = await ActorModel.create(req.body);
    if (!actor) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha creado" });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Actor Creado Correctamente", data: actor });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};
