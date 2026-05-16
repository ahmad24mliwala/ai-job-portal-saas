import cookieParser from "cookie-parser";

import { errorHandler }
from "./middleware/error.middleware";
import authRoutes from "./modules/auth/auth.routes";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {

  res.json({
    success: true,
    message: "AI Job Portal API Running"
  });

});

const PORT = process.env.PORT || 5000;
app.use(errorHandler);
app.listen(PORT, () => {

  console.log(`Server running on ${PORT}`);

});
