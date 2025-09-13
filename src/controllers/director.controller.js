import { DirectorModel } from "../models/director.model.js";

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
