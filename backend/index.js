//importing dependencies --express
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const tastRouter = require("./routes/taskRoutes");
const userRoutes = require("./routes/usersRouter");
//dotenv configs
dotenv.config({ path: "./.env" });
const port = process.env.PORT;
//create express app
const app = express();
//express middleware
app.use(express.json());
//simple middleware
app.use((req, res, next) => {
  console.log("path : " + req.path + "method: " + req.method);
  next();
});
//simple routing
// app.get("/", (req, res) => {
//   res.status(200).json({ message: "sooper sirr" });
// });

//starting our server
//mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
app.listen(process.env.PORT, () => {
  console.log("server is running sir");
});

app.use("/api",tastRouter);
app.use("/post",userRoutes);