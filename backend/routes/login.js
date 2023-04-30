const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    await User.create({
      name: "kunal",
      password: "1234",
      email: "kunal@gmail.com",
      location: "SBS COLONY",
    });
    res.json({
        success: true,
    })
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;