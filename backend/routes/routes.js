import express from "express";
import {
  addIncome,
  getIncome,
  deleteIncome,
  addExpense,
  getExpense,
  deleteExpense,
} from "../controller/IncomeExpense.js";
import { register, login, getuser } from "../controller/UserAuth.js";
import { auth } from "../models/userSchema.js";

export const userRoute = express.Router();
userRoute
  .post("/register", register)
  .post("/login", login)
  .get("/", auth, getuser);

export const incomeRoutes = express.Router();
incomeRoutes
  .post("/", addIncome)
  .get("/", getIncome)
  .delete("/:id", deleteIncome);

export const expenseRoutes = express.Router();
expenseRoutes
  .post("/", addExpense)
  .get("/", getExpense)
  .delete("/:id", deleteExpense);
