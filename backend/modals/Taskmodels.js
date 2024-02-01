const express = require("express");
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  
);
module.exports = mongoose.model("createTask", TaskSchema);
