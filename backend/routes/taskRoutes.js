const express = require("express");
const tastRouter = express.Router();
// const createTask = require('../modals/Taskmodels')
const createTask = require("../modals/Taskmodels");
const {creater} = require('../controllers/taskcontroller')
tastRouter.post("/get", creater);
module.exports = tastRouter;
