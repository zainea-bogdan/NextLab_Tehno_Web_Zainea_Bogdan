"use strict";

const express = require("express");
const sequelize = require("./config/sequelize");
const app = express();
const EmployeeRouter = require("./routes/employeeRouter");

app.set("port", process.env.PORT || 7000);
app.use("/api", EmployeeRouter);

let PORTUL_FOLOSIT = app.get("port");

app.listen(PORTUL_FOLOSIT, async () => {
  console.log(`Server started on http://localhost:${app.get("port")}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
