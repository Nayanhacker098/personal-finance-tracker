import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import axios from "axios";
import cookies from "js-cookie";

const baseUrl = "http://localhost:5000/";

export const GlobalContext = createContext();

export const GlobalApiProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [incomes, setIncomes] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);
  const [recentHistory, setRecentHistory] = useState([]);
  const [userData, setUserData] = useState(undefined);

  // User API Data Start Here

  // const getUser = async () => {
  //   const response = await axios.get(`${baseUrl}user/`);
  //   setUser(response.data);
  // };

  const registerUser = async (users) => {
    await axios
      .post(`${baseUrl}user/register`, users)
      .then((res) => {
        cookies.set("userdata", JSON.stringify(res.data), { expires: 1 });
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const loginUser = async (users) => {
    await axios
      .post(`${baseUrl}user/login`, users)
      .then((res) => {
        cookies.set("userdata", JSON.stringify(res.data), { expires: 1 });
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const logoutUser = () => {
    cookies.remove("userdata");
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

  useEffect(() => {
    setUser(cookies.get("userdata"));
  }, []);

  useEffect(() => {
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, [user]);
  console.log(userData, user);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        registerUser,
        loginUser,
        userData,
        setUserData,
        logoutUser,
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
