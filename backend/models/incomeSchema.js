import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema(
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
      default: "income",
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

const IncomeData = mongoose.model("Incomes", IncomeSchema);
export default IncomeData;
