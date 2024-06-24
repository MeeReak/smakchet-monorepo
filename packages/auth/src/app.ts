import express, { NextFunction, Request, Response } from "express";
import getConfig from "./utils/createConfig";
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler";
import { RegisterRoutes } from "./routes/v1/routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../public/swagger.json";

// Create express app!
const app = express();

const config = getConfig();

// ===================
// Security Middleware
// ===================
app.set("trust proxy", 1);
app.use(hpp());
app.use(helmet());
// Only Allow Specific Origin to Access API Gateway (Frontend)
const corsOptions = {
  origin: [
    // Add your production domain here
    "https://api.smakchet.com",
    // Add your development localhost here
    "http://localhost:9000",
  ],
  credentials: true, // Attach token from client
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// =======================
// Standard Middleware
// =======================
app.use(express.json({ limit: "10mb" }));
app.use((_req: Request, _res: Response, _next: NextFunction) => {
  console.log(_req.path, _req.method);
  _next();
});
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.use(express.static("public"));

// app.use(express.static("public"));
RegisterRoutes(app);

// serve your swagger.json file
// app.get("/docs/swagger.json", (_req: Request, res: Response) => {
//   res.sendFile("swagger.json", { root: "." });
// });

//routes
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ========================
// Global Error Handler
// ========================
app.use(errorHandler);

export default app;
