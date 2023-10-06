import "react-datepicker/dist/react-datepicker.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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

function App() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <div className="app w-full h-full lg:h-screen lg:p-8 flex lg:flex-row lg:gap-8">
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
    </>
  );
}

export default App;
