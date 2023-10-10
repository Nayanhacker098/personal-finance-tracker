import React from "react";
import Form from "../Form";
import TransctionList from "../TransctionList";
import { useGlobalContext } from "../../utils/context";

const optionArr = [
  {
    id: 1,
    optionTitle: "Salary",
    value: "salary",
  },
  {
    id: 2,
    optionTitle: "Freelancing",
    value: "freelancing",
  },
  {
    id: 3,
    optionTitle: "Investment",
    value: "investment",
  },
  {
    id: 4,
    optionTitle: "Stocks",
    value: "stock",
  },
  {
    id: 5,
    optionTitle: "Bitcoin",
    value: "bitcoin",
  },
  {
    id: 6,
    optionTitle: "Youtube",
    value: "yt",
  },
];

const Income = () => {
  const { incomes, totalIncome } = useGlobalContext();
  return (
    <>
      <div className="income-heading w-full bg-[#f5f5f5] p-2 text-center rounded-[8px]">
        <p className="font-semibold text-[#42ad00]">Total Income</p>
        <h1 className="font-semibold text-[#42ad00]">$ {totalIncome}</h1>
      </div>
      <div className="Income grid lg:grid-cols-2 grid-cols-1">
        <Form
          btnClass={
            "bg-[#87ce5b] px-4 py-2 rounded-full font-bold text-white hover:bg-[#42ad00]"
          }
          options={optionArr}
          btnTitle={"Add Income"}
        />
        <TransctionList heading={"Income List"} data={incomes} />
      </div>
    </>
  );
};

export default Income;
