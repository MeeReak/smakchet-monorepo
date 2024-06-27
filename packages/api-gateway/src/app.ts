import express, { NextFunction, Request, Response } from "express";
import getConfig from "./utils/createConfig";
// import compression from "compression";
import cookieSession from "cookie-session";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import { applyRateLimit } from "./middlewares/rate-limits";
import applyProxy from "./middlewares/proxy";
import { logger } from "./utils/logger";
import { StatusCode } from "./utils/consts";
import { verifyUser } from "./middlewares/auth-middleware";
import unless from "./middlewares/unless-route";

// Create express app
const app = express();

const config = getConfig();

// ===================
// Security Middleware!
// ===================
app.set("trust proxy", 1);
// app.use(compression());

app.use(
  cookieSession({
    name: "session",
    keys: [`${config.cookieSecretKeyOne}`, `${config.cookieSecretKeyTwo}`],
    maxAge: 24 * 3 * 3600000,
    secure: false,
    sameSite: "none",
    // domain: ".smakchet.com",
    // path: "/",
    // secure: config.env !== "development", // update with value from config
    // ...(config.env !== "development" && { sameSite: "none" }),
  })
);

app.get('/test-session', (req, res) => {
  console.log("==================Setting test session.");
  req!.session!.test = "Hello World!";
  console.log("================Session data:", req.session);
  res.send("Session set!!");
});


// Prevent HTTP Parameter Pollution attacks
app.use(hpp());

// Prevent Some Security:
// - Stops browsers from sharing your site's vistor data
// - Stops your website from being displayed in a frame
// - Prevent XSS, etc.
app.use(helmet());

// Only Allow Specific Origin to Access API Gateway (Frontend)
const corsOptions = {
  origin: [
    // Add your production domain here
    "https://smakchet.com",
    "https://www.smakchet.com",

    // Add your development localhost here
    "http://localhost:9000",
  ],
  credentials: true, // Attach token from client
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// Apply Limit Request
applyRateLimit(app);

// Hide Express Server Information
app.disable("x-powered-by");

// ===================
// JWT Middleware
// ===================
app.use((req, _res, next) => {
  console.log("Request Path: ", req.path);
  next();
});

// Conditions array
const conditions = [
  { path: "/v1/auth" }, // Exclude all routes starting with /v1/auth
  { path: "/v1/events", method: "GET" }, // Exclude GET requests starting with /v1/events
  { path: "/v1/user/" },
  { path: "/v1/user/info" },
];

// Use verifyUser middleware with the unless function
app.use(unless(conditions, verifyUser));

// ===================
// Proxy Middleware
// ===================
applyProxy(app);

//routes
app.use("*", (req: Request, res: Response, _next: NextFunction) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  logger.error(`${fullUrl} endpoint does not exist`);
  res
    .status(StatusCode.NotFound)
    .json({ message: "The endpoint called does not exist." });
});

export default app;
