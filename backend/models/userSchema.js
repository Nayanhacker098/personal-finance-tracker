import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    maxLength: 50,
  },
  phone: {
    type: String,
    required: true,
    maxLength: 10,
  },
  email: {
    type: String,
    required: true,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

export const UserData = mongoose.model("Users", UserSchema);

export const validate = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().required().label("fullname"),
    number: Joi.string().required().label("number"),
    email: Joi.string().required().label("email"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};

export const auth = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["Token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
// module.exports = { UserData, validate };
