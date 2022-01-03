import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { log } from "../logger";

export const validateRequest =
  (schema: AnySchema) => async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: request.body,
        query: request.query,
        params: request.params,
      });
      return next();
    } catch (error) {
      log.error(error);
      return response.status(400).send(error);
    }
  };
