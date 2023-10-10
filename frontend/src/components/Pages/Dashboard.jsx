import React from "react";
import { notification } from "../../utils/icons";
import TransctionList from "../TransctionList";
import ChartDiv from "../Chart";
import { useGlobalContext } from "../../utils/context";

const Dashboard = () => {
  const { totalIncome, totalExpense, recentHistory, userData } =
    useGlobalContext();

  return (
    <>
      <div className="flex items-center justify-between lg:mx-6 text-[#09095c]">
        <p className="text-[1.2rem]">
          Welcome Back <b>{userData?.data?.fullname.split(" ")[0]}</b>,
        </p>
        <span className="lg:static lg:text-[1.5rem] text-[1.7rem]  absolute -top-12 right-[20px] not">
          {notification}
        </span>
      </div>
      <div className="dashboard grid lg:grid-cols-2 grid-cols-1">
        <div className="col-wrapper p-4">
          {/* <div className="col-1  p-4"> */}
          <ChartDiv />
          {/* </div> */}
          <div className="col-2  flex flex-wrap  text-center">
            <div className="box bg-white rounded-[10px] p-4 m-2 grow shrink-0 basis-[200px]">
              <h4 className=" font-bold text-[#222260]">Total Incomes</h4>
              <p className="text-[1.5rem] text-[#42ad00] font-bold">
                $ {totalIncome}
              </p>
            </div>
            <div className="box bg-white rounded-[10px] p-4 m-2  grow shrink-0 basis-[200px]">
              <h4 className=" font-bold text-[#222260]">Total Expenses</h4>
              <p className="text-[1.5rem] text-[#ff0000] font-bold">
                ${totalExpense}
              </p>
            </div>
            <div className="box bg-white rounded-[10px] p-4 m-2  grow shrink-0 basis-[200px]">
              <h4 className=" font-bold text-[#222260]">Total Balance</h4>
              <p className="text-[1.5rem] text-[#0098ff] font-bold">
                $ {totalIncome - totalExpense}
              </p>
            </div>
          </div>
        </div>
        <TransctionList heading={"Recent History"} data={recentHistory} />
      </div>
    </>
  );
};

export default Dashboard;
