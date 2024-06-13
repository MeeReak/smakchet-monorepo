import APIError from "@application/errors/api-error";
import { privateKey } from "@application/server";
import { NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: any, _res: any, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header
  console.log("header token : ", req.headers.authorization);
  console.log("token : ", token);

  if (!token) {
    throw new Error("Token not provided");
  }
  try {
    const decodedToken = jwt.verify(token, privateKey, {
      algorithms: ["RS256"],
    }) as {
      id: string;
      role: string;
    };

    console.log("here decode: ", decodedToken);
    req.role = decodedToken.role;
    req.id = decodedToken.id; // Attach userId to the request object
    console.log("acrossed req.id");
    next(); // If token is valid, continue to the next middleware or route handler
  } catch (error: any) {
    next(new APIError(error.message, 409)); // Throw error for invalid token
  }
};
