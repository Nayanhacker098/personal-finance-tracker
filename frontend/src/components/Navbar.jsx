import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userImg from "../images/user-icon.png";
import { useGlobalContext } from "../utils/context";
import {
  navopen,
  navclose,
  dashboard,
  transactions,
  trend,
  expenses,
} from "../utils/icons";

const navlist = [
  {
    id: 1,
    title: "Dashbaord",
    icon: dashboard,
    link: "/",
  },
  {
    id: 2,
    title: "Incomes",
    icon: transactions,
    link: "/incomes",
  },
  {
    id: 3,
    title: "Expenses",
    icon: trend,
    link: "/expenses",
  },
  {
    id: 4,
    title: "View Transaction",
    icon: expenses,
    link: "/view-transaction",
  },
];

const Navbar = () => {
  const [navIcon, setNavIcon] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutUser, setUser, setUserData } = useGlobalContext();

  return (
    <>
      <div
        className="nav-icon lg:hidden text-[#222260] bg-white w-12 h-12 flex justify-center items-center text-[1.8rem] absolute z-[2] ml-2"
        onClick={() => {
          setNavIcon(!navIcon);
        }}
      >
        {navIcon ? navclose : navopen}
      </div>
      <nav
        className={` hidden lg:w-[300px] h-full  lg:flex flex-col items-center justify-between custom-bg p-8 lg:border-[4px] lg:border-white rounded-[8px] ${
          navIcon ? "nav-activated " : ""
        }`}
      >
        <div className="user-list-wrapper">
          <Link to={"/update-profile"}>
            <div className="user-wrapper flex gap-4 items-center ">
              <img src={userImg} alt="user-img" className="w-16 user-img" />
              <div className="user-info text-[#09095c]">
                <h1 className="font-semibold">Nayan Bhalerao</h1>
                <p className="text-center">Add bank a/c</p>
              </div>
            </div>
          </Link>
          <div className="nav-list flex flex-col gap-6 mt-12 py-4 pl-8 pr-4">
            {navlist.map((item) => {
              return (
                <li
                  className={`relative flex items-center gap-4  text-[1.1rem] cursor-pointer  ${
                    location.pathname === item.link ? "active" : ""
                  }`}
                  key={item.id}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setNavIcon(!navIcon);
                    }
                  }}
                >
                  <Link to={item.link}>
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
        <button
          className="nav-signout"
          onClick={() => {
            logoutUser();
            setUser(undefined);
            setUserData(undefined);
            navigate("/login");
          }}
        >
          <span>Signout</span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
