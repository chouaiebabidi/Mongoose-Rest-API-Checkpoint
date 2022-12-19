const express = require("express");
const User = require("../models/user");

const bonbonRouter = express.Router();

// post
bonbonRouter.post("/add", async (req, res) => {
  try {
    let newUser = new User(req.body);
    let result = await newUser.save();
    res.send({ user: result, msg: "user is added" });
  } catch (error) {
    console.log(error);
  }
});

//get users

bonbonRouter.get("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ user: result, msg: "one user" });
  } catch (error) {
    console.log(error);
  }
});

//delete

bonbonRouter.delete("/:id", async (req, res) => {
  try {
    let result = await User.findById(req.params.id);
    res.send({ msg: "user is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update user

bonbonRouter.put("/:id", async (req, res) => {
  try {
    let result = await Bonbon.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "user is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = bonbonRouter;
