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
            url?: string;
            status?: string;
            verify_token?: string;
            isLogout?: boolean;
          };

          try {
            responseBody = JSON.parse(bodyString);
            console.log("================= Response Body", responseBody);
            // If Response Error, Not Modified Response
            if (responseBody.errors) {
              return res.status(proxyRes.statusCode!).json(responseBody);
            }

            // Store JWT in session
            if (responseBody.token) {
              console.log("================= Token", responseBody.token);
              (req as Request).session!.jwt = responseBody.token;
            }

            if (responseBody.url) {
              console.log(responseBody.url);
              return res.redirect(responseBody.url);
            }

            if (responseBody.verify_token) {
              console.log("================= Verify Token", responseBody);

              return res.json(responseBody);
            }
            if (responseBody.status) {
              console.log("================= Status", responseBody);
              return res.json(responseBody.status);
            }

            if (responseBody.isLogout) {
              console.log("isLogout===========================");
              res.clearCookie("session");
              res.clearCookie("session.sig");
            }

            // Modify response to send only the message to the client
            res.json({
              message: responseBody.message,
              token: responseBody.token,
            });
          } catch (error) {
            console.log(error);
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

        console.log("==========================", expressReq.session);
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
            data?: Array<object>;
          };

          try {
            responseBody = JSON.parse(bodyString);

            // If Response Error
            if (responseBody.errors) {
              return res.status(proxyRes.statusCode!).json(responseBody);
            }
            if (responseBody.data) {
              return res.json(responseBody);
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
    selfHandleResponse: false,
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
        console.log("jjjjjjjjjjjjjjjjjjjjj", expressReq.session);

        // Extract JWT token from session
        const token = expressReq.session!.jwt;
        proxyReq.setHeader("Authorization", `Bearer ${token}`);
      },
      // proxyRes: (proxyRes, _req, res) => {
      //   let originalBody: Buffer[] = [];
      //   proxyRes.on("data", function (chunk: Buffer) {
      //     originalBody.push(chunk);
      //   });

      //   proxyRes.on("end", function () {
      //     const bodyString = Buffer.concat(originalBody).toString("utf8");

      //     let responseBody: {
      //       message?: string;
      //       token?: string;
      //       errors?: Array<object>;
      //     };

      //     try {
      //       responseBody = JSON.parse(bodyString);

      //       // If Response Error
      //       if (responseBody.errors) {
      //         return res.status(proxyRes.statusCode!).json(responseBody);
      //       }

      //       return res.status(proxyRes.statusCode!).json(responseBody);
      //     } catch (error) {
      //       return res.status(500).json({ message: "Error parsing response" });
      //     }
      //   });
      // },
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
  [ROUTE_PATHS.APPLICATION_SERVICE]: {
    target: getConfig().applicationServiceUrl,
    changeOrigin: true,
    selfHandleResponse: false,
    pathRewrite: (path, _req) => `${ROUTE_PATHS.APPLICATION_SERVICE}${path}`,
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
        console.log("application proxy", expressReq.session);

        // Extract JWT token from session
        const token = expressReq.session!.jwt;
        proxyReq.setHeader("Authorization", `Bearer ${token}`);
      },
      // proxyRes: (proxyRes, _req, res) => {
      //   let originalBody: Buffer[] = [];
      //   proxyRes.on("data", function (chunk: Buffer) {
      //     originalBody.push(chunk);
      //   });

      //   proxyRes.on("end", function () {
      //     const bodyString = Buffer.concat(originalBody).toString("utf8");

      //     let responseBody: {
      //       message?: string;
      //       token?: string;
      //       errors?: Array<object>;
      //     };

      //     try {
      //       logger.info(`bodyString here ${bodyString}`);
      //       responseBody = JSON.parse(bodyString);

      //       logger.info(`responbody here: ${responseBody.token}`);
      //       // If Response Error
      //       // if (responseBody.errors) {
      //       //   return res.status(proxyRes.statusCode!).json(responseBody);
      //       // }

      //       return res.json({
      //         message: responseBody.message,
      //       });
      //     } catch (error) {
      //       return res.status(500).json({ message: "Error parsing response" });
      //     }
      //   });
      // },
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
