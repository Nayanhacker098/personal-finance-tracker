import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:5000/";

export const GlobalContext = createContext();

export const GlobalApiProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [incomes, setIncomes] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);
  const [recentHistory, setRecentHistory] = useState([]);

  // User API Data Start Here

  const getUser = async () => {
    const response = await axios.get(`${baseUrl}user/`);
    setUser(response.data);
  };

  const registerUser = async (users) => {
    await axios.post(`${baseUrl}user/register`, users).catch((err) => {
      setError(err.response.data.message);
    });
    getUser();
  };

  const loginUser = async (users) => {
    await axios.post(`${baseUrl}user/login`, users).catch((err) => {
      setError(err.response.data.message);
    });
    await getUser();
  };

  // Income API Data Start Here
  const getIncome = async () => {
    const response = await axios.get(`${baseUrl}income`);
    setIncomes(response.data);
  };

  const addIncome = async (income) => {
    await axios.post(`${baseUrl}income`, income).catch((err) => {
      setError(err.response.data.message);
    });
    getIncome();
  };

  const deleteIncome = async (id) => {
    await axios.delete(`${baseUrl}income/${id}`).catch((err) => {
      setError(err.response.data.message);
    });
    getIncome();
  };

  const totalIncome = incomes.reduce((a, b) => a + b.amount, 0);

  // Expenses API data Start here
  const getExpense = async () => {
    const response = await axios.get(`${baseUrl}expense`);
    setExpense(response.data);
  };

  const addExpense = async (expense) => {
    await axios.post(`${baseUrl}expense`, expense).catch((err) => {
      setError(err.response.data.message);
    });
    getExpense();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${baseUrl}expense/${id}`).catch((err) => {
      setError(err.response.data.message);
    });
    getExpense();
  };

  const totalExpense = expense.reduce((a, b) => a + b.amount, 0);

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  const getRecentHistory = () => {
    const history = incomes.concat(expense);
    setRecentHistory(history);
  };
  useEffect(() => {
    getRecentHistory();
  }, [incomes, expense]);
  return (
    <GlobalContext.Provider
      value={{
        user,
        registerUser,
        loginUser,
        addIncome,
        incomes,
        deleteIncome,
        totalIncome,
        expense,
        addExpense,
        deleteExpense,
        totalExpense,
        recentHistory,
        getRecentHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
