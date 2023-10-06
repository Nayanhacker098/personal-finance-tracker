import React, { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../utils/context";

const PrivateRoute = ({ path, element }) => {
  const { user } = useGlobalContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  console.log("working");
  return <Route path={path} element={element} />;
};

export default PrivateRoute;
