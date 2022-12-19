const express = require("express");
const User = require("../models/user");

const userRouter = express.Router();

// post
userRouter.post("/add", async (req, res) => {
  try {
    let newUser = new User(req.body);
    let result = await newUser.save();
    res.send({ user: result, msg: "user is added" });
  } catch (error) {
    console.log(error);
  }
});

//get users

userRouter.get("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ user: result, msg: "one user" });
  } catch (error) {
    console.log(error);
  }
});

//delete

userRouter.delete("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ msg: "user is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update user

userRouter.put("/:id", async (req, res) => {
  try {
    let result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "user is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
