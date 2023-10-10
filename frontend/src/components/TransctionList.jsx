import React from "react";
import { trash } from "../utils/icons";
import { useGlobalContext } from "../utils/context";

const TransctionList = ({ heading, data }) => {
  const { deleteIncome, deleteExpense, userData } = useGlobalContext();
  return (
    <div className="col-3 p-4">
      <h2 className=" font-semibold text-[#09095c]">{heading} :</h2>
      <div className="container">
        {data &&
          data
            ?.slice(0, 7)
            .filter((t) => t?.user === userData?.data?._id)
            .map((list) => {
              return (
                <div
                  className={`bg-white rounded-lg flex justify-between font-semibold my-4 p-4 relative border-l-4 text-[#222260] ${
                    list.type === "expense" ? "red-1" : "green-1"
                  }`}
                  key={list._id}
                >
                  <h3>{list.title}</h3>
                  <div className="flex items-center lg:gap-8 gap-6">
                    <h3> $ {list.amount}</h3>
                    <span
                      className="trash text-xl cursor-pointer"
                      onClick={() => {
                        if (list.type === "expense") {
                          deleteExpense(list._id);
                        } else {
                          deleteIncome(list._id);
                        }
                      }}
                    >
                      {trash}
                    </span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default TransctionList;
