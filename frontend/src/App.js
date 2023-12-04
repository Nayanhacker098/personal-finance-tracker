import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import {
  Navbar,
  Dashboard,
  Income,
  Expense,
  Viewtransaction,
  Updateprofile,
  Login,
  Register,
} from "./components";
import { useGlobalContext } from "./utils/context";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const { userData } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!userData) {
      navigate("/login");
      console.log("worked");
      if (["/login", "/register"].includes(location.pathname)) {
        navigate(location.pathname);
      }
    } else {
      if (
        userData &&
        ["/incomes", "/expenses", "/view-transaction"].includes(
          location.pathname
        )
      ) {
        navigate(location.pathname);
      } else {
        navigate("/");
      }
    }
  }, [userData, navigate]);

  return (
    <div className="app">
      <Toaster />
      {!userData ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <div className=" w-full h-full lg:h-screen lg:p-8 flex lg:flex-row lg:gap-8">
          <div className="col-1">
            <Navbar />
          </div>
          <div className="col-2 w-full custom-bg lg:mt-0 mt-12 p-[0.8rem] lg:rounded-[8px] lg:border-[4px] lg:border-white rounded-none">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/incomes" element={<Income />} />
              <Route path="/expenses" element={<Expense />} />
              <Route path="/view-transaction" element={<Viewtransaction />} />
              <Route path="/update-profile" element={<Updateprofile />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
