import APIError from "@api-gateway/Errors/api-error";
import { publickey } from "@api-gateway/server";
import { StatusCode } from "@api-gateway/utils/consts";
import getConfig from "@api-gateway/utils/createConfig";
import { logger } from "@api-gateway/utils/logger";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

async function verifyUser(req: Request, res: Response, _next: NextFunction) {
  try {
    console.log("helllo", req.session);
    if (!req.session!.jwt) {
      logger.error(
        "Token is not available. Gateway Service verifyUser() method error"
      );
      throw new APIError(
        "Please login to access this resource.",
        StatusCode.Unauthorized
      );
    }

    await verify(req.session?.jwt, publickey, { algorithms: ["RS256"] });
    _next();
  } catch (error: any) {
    console.log(error.message);
    return res.redirect(`${getConfig().clientUrl}/login`);

    _next(error);
  }
}

export { verifyUser };
