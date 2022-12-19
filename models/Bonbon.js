const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bonbonSchema = new schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  isAdmin: { type: Boolean, default: false },
});
const Bonbon = mongoose.model("Bonbon", userSchema);

module.exports = User;
