import React from "react";
import Form from "../Form";
import TransctionList from "../TransctionList";
import { useGlobalContext } from "../../utils/context";

const optionArr = [
  {
    id: 1,
    optionTitle: "Paid",
    value: "paid",
  },
];

const Expense = () => {
  const { expense, totalExpense } = useGlobalContext();
  return (
    <>
      <div className="income-heading w-full bg-[#f5f5f5] p-2 text-center rounded-[8px]">
        <p className="font-semibold text-[#ff0000]">Total Expense</p>
        <h1 className="font-semibold text-[#ff0000]">$ {totalExpense}</h1>
      </div>
      <div className="Income grid lg:grid-cols-2 grid-cols-1">
        <Form
          btnClass={
            "bg-[#ff0000] px-4 py-2 rounded-full font-bold text-white hover:bg-[#ff9c94]"
          }
          options={optionArr}
          btnTitle={"Add Expense"}
        />
        <TransctionList heading={"Expense List"} data={expense} />
      </div>
    </>
  );
};

export default Expense;
