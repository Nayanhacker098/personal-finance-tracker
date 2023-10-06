// export const recentHistory = [
//   {
//     txid: 1,
//     title: "Dentist Appoinment",
//     amount: 500,
//     type: "spent",
//   },
//   {
//     txid: 2,
//     title: "Travelling",
//     amount: 235,
//     type: "spent",
//   },
//   {
//     txid: 3,
//     title: "Freelancing",
//     amount: 1000,
//     type: "earn",
//   },
//   {
//     txid: 4,
//     title: "Internet",
//     amount: 350,
//     type: "spent",
//   },
//   {
//     txid: 5,
//     title: "Salary",
//     amount: 5000,
//     type: "earn",
//   },
//   {
//     txid: 6,
//     title: "Stocks",
//     amount: 1200,
//     type: "earn",
//   },
//   {
//     txid: 7,
//     title: "Grocery",
//     amount: 800,
//     type: "spent",
//   },
// ];

export const inexList = [
  {
    txid: 1,
    title: "Salary",
    amount: 5000,
    type: "earn",
  },
  {
    txid: 2,
    title: "Dentist Appoinment",
    amount: 500,
    type: "spend",
  },
  {
    txid: 3,
    title: "Travelling",
    amount: 235,
    type: "spend",
  },
  {
    txid: 4,
    title: "Affiliate Marketing",
    amount: 3500,
    type: "earn",
  },
  {
    txid: 5,
    title: "Dividend on Stocks",
    amount: 4500,
    type: "earn",
  },
  {
    txid: 6,
    title: "Rent",
    amount: 8500,
    type: "spend",
  },
  {
    txid: 7,
    title: "Freelancing",
    amount: 7500,
    type: "earn",
  },
  {
    txid: 8,
    title: "Food",
    amount: 2500,
    type: "spend",
  },
  {
    txid: 9,
    title: "E-commerce Store",
    amount: 8000,
    type: "earn",
  },

  {
    txid: 10,
    title: "Internet",
    amount: 500,
    type: "spend",
  },

  {
    txid: 11,
    title: "Credit Card EMI",
    amount: 3000,
    type: "spend",
  },
  {
    txid: 12,
    title: "Car Repair",
    amount: 1200,
    type: "spend",
  },
];

export const incomeList = inexList.filter((income) => income.type === "earn");
export const expenseList = inexList.filter(
  (expense) => expense.type === "spend"
);

export const totalSpend = inexList
  .filter((item) => item.type === "spend")
  .reduce((a, b) => a + b.amount, 0);

export const totalEarn = inexList
  .filter((item) => item.type === "earn")
  .reduce((a, b) => a + b.amount, 0);

export const total = totalEarn - totalSpend;
