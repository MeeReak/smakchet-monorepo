import jwt from "jsonwebtoken";
import { logger } from "./logger";
import ApiError from "@auth/Errors/api-error";
import { privateKey } from "@auth/server";
export const decodedToken = async (token: string) => {
  try {
    const decodedPayload = jwt.verify(token, privateKey, {
      algorithms: ["RS256"],
    }) as {
      id: string;
      role: string;
    };

    const datapayload = {
      role: decodedPayload.role,
      id: decodedPayload.id,
    };

    console.log("datapayload : ", datapayload);

    return datapayload;
  } catch (error: unknown) {
    logger.error("Unable to decode in decodeToken() method !", error);
    throw new ApiError("Can't Decode token!");
  }
};
