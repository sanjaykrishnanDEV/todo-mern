const express = require("express");
const mongoose = require("mongoose");
const userModal = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
});
module.exports = mongoose.model("userData",userModal);