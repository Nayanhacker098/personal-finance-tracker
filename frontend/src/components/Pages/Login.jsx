import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, userData } = useGlobalContext();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = loginInfo;

  const handleInput = (name) => (e) => {
    setLoginInfo({ ...loginInfo, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginInfo);
    setIsLoading(true);
    setLoginInfo({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  }, [isLoading]);

  return (
    <div className="login w-full h-screen  flex flex-col items-center justify-center">
      <form className="login-form custom-bg lg:border-[4px] lg:border-white rounded-[8px] text-black">
        <h2 className="text-2xl  font-semibold">Login</h2>
        <div className="login-input">
          <input
            type="text"
            placeholder="email"
            value={email}
            name="email"
            onChange={handleInput("email")}
          />
        </div>
        <div className="login-input">
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={handleInput("password")}
          />
        </div>
        <button className="login-btn" onClick={(e) => handleSubmit(e)}>
          Login
        </button>
        <div className="mt-4">Don't you have account ?</div>
        <Link to="/register" className="underline">
          Signup here
        </Link>
      </form>
    </div>
  );
};

export default Login;
