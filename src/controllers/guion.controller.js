import { GuionModel } from "../models/guion.model.js";

export const createGuion = async (req, res) => {
  const { lenguage, author, year } = req.body;
  try {
    const newGuion = await GuionModel.create(req.body);
    if (!newGuion) {
      console.log(error);
      return res.status(404).json({ msg: "No se ha creado" });
    }
    return res
      .status(201)
      .json({ ok: true, msg: "Guion Creado Correctamente", data: newGuion });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Error Server", data: null });
  }
};
