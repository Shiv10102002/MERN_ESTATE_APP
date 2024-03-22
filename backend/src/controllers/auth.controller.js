import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  console.log(req.body);

  const { username, email, password } = req.body;
  const hashedpass = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedpass,
  });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check user is available or not if not return error
    const validuser = await User.findOne({ email });
    if (!validuser) return next(errorHandler(404, "User not found"));

    // check passoword is valid or not if not then return error
    const validPassword = bcryptjs.compareSync(password, validuser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials!"));

    const token = jwt.sign({ id: validuser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validuser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
