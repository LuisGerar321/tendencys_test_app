import Joi from "joi";
import { Response, Request, NextFunction } from "express";

export const validateBodyMiddleware = (schemaValidator: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (schemaValidator === null) return next();
    const { body } = req;
    const isValidate = schemaValidator.validate(body);
    if (isValidate?.error) {
      return res.status(400).send({
        status: 400,
        statusMessage: "Bad request",
        message: isValidate.error.message,
      });
    }
    next();
  };
};
