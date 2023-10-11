import IncomeData from "../models/incomeSchema.js";
import ExpenseData from "../models/expenseSchema.js";

// Income API
export const addIncome = async (req, res) => {
  const { title, amount, date, category, description, user } = req.body;
  const income = IncomeData({
    title,
    amount,
    date,
    category,
    description,
    user,
  });

  try {
    await income.save();
    res.status(200).json({ message: "Income Transaction Added " });
  } catch (err) {
    console.log(err);
  }
};

export const getIncome = async (req, res) => {
  try {
    // const findIncome = await IncomeData.findById(req.params.id).;
    const findIncome = await IncomeData.find({});
    res.status(200).json(findIncome);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeData.findByIdAndDelete(id)
    .then(() => {
      // console.log(income);
      res.status(200).json({ message: "Income Transaction Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
};

// Expense API
export const addExpense = async (req, res) => {
  const { title, amount, date, category, description, user } = req.body;
  const expense = ExpenseData({
    title,
    amount,
    date,
    category,
    description,
    user,
  });

  try {
    await expense.save();
    res.status(200).json({ message: "Expense Transaction Added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error !" });
  }
};

export const getExpense = async (req, res) => {
  try {
    const findExpense = await ExpenseData.find({});
    res.status(200).json(findExpense);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error !" });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseData.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Expense Transaction Deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error !" });
    });
};
