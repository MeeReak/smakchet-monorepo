import { NextFunction, Request, Response } from "express";
import { ZodSchema, ZodError } from "zod";
import { StatusCode } from "../utils/consts";
import APIError from "@application/errors/api-error";

export const validateInput = (schema: ZodSchema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      console.log("Validation success!");
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.reduce(
          (acc: { [key: string]: string }, issue) => {
            acc[issue.path.join(".")] = issue.message;
            return acc;
          },
          {}
        );

        console.error("Validation errors:", formattedErrors);

        const inputError = new APIError(
          JSON.stringify(formattedErrors),
          StatusCode.UnprocessableEntity
        );
        next(inputError);
      } else {
        console.error("Unexpected error during validation:", error);
        next(
          new APIError("Internal Server Error", StatusCode.InternalServerError)
        );
      }
    }
  };
};
