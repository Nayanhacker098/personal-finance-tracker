import bcrypt from "bcrypt";
import { UserData, validate } from "../models/userSchema.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    validate(req.body);
    const user = await UserData.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).send({ message: "User already Exist!" });
    }
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    // await new UserData({ ...req.body, password: hashpassword }).save();
    const newUser = await UserData.create({
      ...req.body,
      password: hashpassword,
    });
    const token = newUser.generateAuthToken();
    newUser.token = token;

    typeof window !== "undefined" &&
      window.localStorage.setItem("authToken", token);

    res
      .status(201)
      .setHeader("Token", token)
      .send({ message: "User created successfully", User: newUser });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    validate(req.body);
    const user = await UserData.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid Email....." });
    }
    const validatePass = await bcrypt.compare(req.body.password, user.password);
    if (!validatePass) {
      return res.status(401).send({ message: "Invalid Password....." });
    }
    const token = user.generateAuthToken();
    user.token = token;

    res.status(200).send({ message: "logged in successfully", data: user });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

// export const getuser = async (req, res) => {
//   const decode = jwt.verify(token, process.env.JWTPRIVATEKEY);
//   const foundUser = await UserData.findOne({ email: decode?.email });
//   if (foundUser) {
//     return res.status(200).json(foundUser);
//   } else {
//     return res.send("user not found !");
//   }
// };
