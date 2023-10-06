import bcrypt from "bcrypt";
import { UserData, validate } from "../models/userSchema.js";

export const register = async (req, res) => {
  try {
    validate(req.body);
    const user = await UserData.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).send({ message: "User already Exist!" });
    }
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    await new UserData({ ...req.body, password: hashpassword }).save();
    res.status(201).send({ message: "User created successfully" });
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

    return res
      .status(200)
      .setHeader("token", token)
      .send({ data: token, message: "logged in successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getuser = async (req, res) => {
  const { email } = req.body;
  const foundUser = await UserData.findOne({ email });
  if (foundUser) {
    return res.status(200).json(foundUser);
  } else {
    return res.send("user not found !");
  }
};
