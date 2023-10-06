import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 30,
    },
    amount: {
      type: Number,
      required: true,
      maxLength: 10,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "expense",
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 50,
    },
  },
  { timestamps: true }
);

const ExpenseData = mongoose.model("Expenses", ExpenseSchema);
export default ExpenseData;
