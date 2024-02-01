const userModal = require("../modals/userModel");
const express = require("express");
const userRoutes = express.Router();
const mongoose = require("mongoose");
const { userController } = require("../controllers/userController");
userRoutes.post("/", userController);
userRoutes.get("/showAllUsers", async (req, res) => {
  try {
    const allUsers = await userModal.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
userRoutes.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const foundedUser = await userModal.findById(id);
    res.status(200).json(foundedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
userRoutes.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deletedUser = await userModal.findByIdAndDelete(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = userRoutes;
