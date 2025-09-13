import { validationResult } from "express-validator";

export const aplicarValidation = (req, res, next) => {
  const validation = validationResult(req);

  if (!validation.isEmpty()) {
    return res.status(400).json(validation.array());
  }
  next();
};
