import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRoute, incomeRoutes, expenseRoutes } from "./routes/routes.js";

import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRoute);
app.use("/income", incomeRoutes);
app.use("/expense", expenseRoutes);

// Database
const database = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected !");
    })
    .catch((err) => {
      console.log(err);
    });
};

// server
database();
app.listen(port, () => {
  console.log(`Server is running on : ${port}`);
});
