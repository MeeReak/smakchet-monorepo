import { ROUTE_PATHS } from "@api-gateway/route-defs";
import { StatusCode } from "@api-gateway/utils/consts";
import getConfig from "@api-gateway/utils/createConfig";
import { logger } from "@api-gateway/utils/logger";
import express, { Request, Response } from "express";
import { ClientRequest, IncomingMessage } from "http";
import { createProxyMiddleware, Options } from "http-proxy-middleware";

interface ProxyConfig {
  [context: string]: Options<Request, Response>;
}

interface NetworkError extends Error {
  code?: string;
}

const proxyConfigs: ProxyConfig = {
  [ROUTE_PATHS.AUTH_SERVICE]: {
    target: getConfig().authServiceUrl,
    changeOrigin: true,
    selfHandleResponse: true,
    pathRewrite: (path, _req) => `${ROUTE_PATHS.AUTH_SERVICE}${path}`,
    on: {
      proxyReq: (
        proxyReq: ClientRequest,
        req: IncomingMessage,
        _res: Response
      ) => {
        logger.info(
          `Proxied request URL: ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`
        );
        logger.info(`Headers Sent: ${JSON.stringify(proxyReq.getHeaders())}`);
        const expressReq = req as Request;

        // Extract JWT token from session
        const token = expressReq.session!.jwt;
        proxyReq.setHeader("Authorization", `Bearer ${token}`);
      },
      proxyRes: (proxyRes, req, res) => {
        let originalBody: Buffer[] = [];
        proxyRes.on("data", function (chunk: Buffer) {
          originalBody.push(chunk);
        });
        console.log(originalBody);
        proxyRes.on("end", function () {
          const bodyString = Buffer.concat(originalBody).toString("utf8");

          let responseBody: {
            message?: string;
            token?: string;
            errors?: Array<object>;
          };

          try {
            responseBody = JSON.parse(bodyString);
            console.log(responseBody);
            // If Response Error, Not Modified Response
            if (responseBody.errors) {
              return res.status(proxyRes.statusCode!).json(responseBody);
            }

            // Store JWT in session
            if (responseBody.token) {
              console.log(responseBody.token);
              (req as Request).session!.jwt = responseBody.token;
            }

            // Modify response to send only the message to the client
            res.json({ message: responseBody.message});
          } catch (error) {
            return res.status(500).json({ message: "Error parsing response" });
          }
        });
      },
      error: (err: NetworkError, _req, res) => {
        logger.error(`Proxy Error: ${err}`);
        switch (err.code) {
          case "ECONNREFUSED":
            (res as Response).status(StatusCode.ServiceUnavailable).json({
              message:
                "The service is temporarily unavailable. Please try again later.",
            });
            break;
          case "ETIMEDOUT":
            (res as Response).status(StatusCode.GatewayTimeout).json({
              message: "The request timed out. Please try again later.",
            });
            break;
          default:
            (res as Response)
              .status(StatusCode.InternalServerError)
              .json({ message: "An internal error occurred." });
        }
      },
    },
  },
  [ROUTE_PATHS.USER_SERVICE]: {
    target: getConfig().userServiceUrl,
    changeOrigin: true,
    selfHandleResponse: true,
    pathRewrite: (path, _req) => `${ROUTE_PATHS.USER_SERVICE}${path}`,
    on: {
      proxyReq: (
        proxyReq: ClientRequest,
        req: IncomingMessage,
        _res: Response
      ) => {
        logger.info(
          `Proxied request URL: ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`
        );
        logger.info(`Headers Sent: ${JSON.stringify(proxyReq.getHeaders())}`);
        const expressReq = req as Request;

        // Extract JWT token from session
        const token = expressReq.session!.jwt;
        proxyReq.setHeader("Authorization", `Bearer ${token}`);
      },
      proxyRes: (proxyRes, _req, res) => {
        let originalBody: Buffer[] = [];
        proxyRes.on("data", function (chunk: Buffer) {
          originalBody.push(chunk);
        });
        console.log(originalBody);
        proxyRes.on("end", function () {
          const bodyString = Buffer.concat(originalBody).toString("utf8");

          let responseBody: {
            message?: string;
            token?: string;
            errors?: Array<object>;
          };

          try {
            responseBody = JSON.parse(bodyString);

            // If Response Error
            if (responseBody.errors) {
              return res.status(proxyRes.statusCode!).json(responseBody);
            }

            return res.status(proxyRes.statusCode!).json(responseBody);
          } catch (error) {
            return res.status(500).json({ message: "Error parsing response" });
          }
        });
      },
      error: (err: NetworkError, _req, res) => {
        logger.error(`Proxy Error: ${err}`);
        switch (err.code) {
          case "ECONNREFUSED":
            (res as Response).status(StatusCode.ServiceUnavailable).json({
              message:
                "The service is temporarily unavailable. Please try again later.",
            });
            break;
          case "ETIMEDOUT":
            (res as Response).status(StatusCode.GatewayTimeout).json({
              message: "The request timed out. Please try again later.",
            });
            break;
          default:
            (res as Response)
              .status(StatusCode.InternalServerError)
              .json({ message: "An internal error occurred." });
        }
      },
    },
  },
  [ROUTE_PATHS.EVENT_SERVICE]: {
    target: getConfig().eventServiceUrl,
    changeOrigin: true,
    selfHandleResponse: true,
    pathRewrite: (path, _req) => `${ROUTE_PATHS.EVENT_SERVICE}${path}`,
    on: {
      proxyReq: (
        proxyReq: ClientRequest,
        req: IncomingMessage,
        _res: Response
      ) => {
        logger.info(
          `Proxied request URL: ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`
        );
        logger.info(`Headers Sent: ${JSON.stringify(proxyReq.getHeaders())}`);
        const expressReq = req as Request;

        // Extract JWT token from session
        const token = expressReq.session!.jwt;
        proxyReq.setHeader("Authorization", `Bearer ${token}`);
      },
      proxyRes: (proxyRes, _req, res) => {
        let originalBody: Buffer[] = [];
        proxyRes.on("data", function (chunk: Buffer) {
          originalBody.push(chunk);
        });

        proxyRes.on("end", function () {
          const bodyString = Buffer.concat(originalBody).toString("utf8");

          let responseBody: {
            message?: string;
            token?: string;
            errors?: Array<object>;
          };

          try {
            responseBody = JSON.parse(bodyString);

            // If Response Error
            if (responseBody.errors) {
              return res.status(proxyRes.statusCode!).json(responseBody);
            }

            return res.status(proxyRes.statusCode!).json(responseBody);
          } catch (error) {
            return res.status(500).json({ message: "Error parsing response" });
          }
        });
      },
      error: (err: NetworkError, _req, res) => {
        logger.error(`Proxy Error: ${err}`);
        switch (err.code) {
          case "ECONNREFUSED":
            (res as Response).status(StatusCode.ServiceUnavailable).json({
              message:
                "The service is temporarily unavailable. Please try again later.",
            });
            break;
          case "ETIMEDOUT":
            (res as Response).status(StatusCode.GatewayTimeout).json({
              message: "The request timed out. Please try again later.",
            });
            break;
          default:
            (res as Response)
              .status(StatusCode.InternalServerError)
              .json({ message: "An internal error occurred." });
        }
      },
    },
  },
};

const applyProxy = (app: express.Application) => {
  Object.keys(proxyConfigs).forEach((context: string) => {
    app.use(context, createProxyMiddleware(proxyConfigs[context]));
  });
};

export default applyProxy;
