import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../utils/context";

const Register = () => {
  const { registerUser } = useGlobalContext();
  const [userDetail, setUserDetail] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const { fullname, email, password, phone } = userDetail;
  const handleInput = (name) => (e) => {
    setUserDetail({ ...userDetail, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userDetail);
    setUserDetail({
      fullname: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <div className="register w-full h-screen bg-white flex flex-col items-center justify-center">
      <form className="login-form text-black">
        <h2 className="text-2xl  font-semibold">Register</h2>
        <div className="login-input">
          <input
            type="text"
            placeholder="full name"
            value={fullname}
            name="fullname"
            onChange={handleInput("fullname")}
          />
        </div>
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
        <div className="login-input">
          <input
            type="number"
            placeholder="Phone No"
            value={phone}
            name="phone"
            onChange={handleInput("phone")}
          />
        </div>
        <button className="login-btn" onClick={(e) => handleSubmit(e)}>
          Register
        </button>
        <div className="mt-4 ">Do you have account ?</div>
        <Link to="/login" className=" underline">
          Login here
        </Link>
      </form>
    </div>
  );
};

export default Register;
