const express = require("express");
const { departments } = require("../db");
const router = express.Router();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

router.get("/departments", logger, (req, res) => {
  throw new Error("newly");
  res.status(200).json(departments);
});

router.get("/departments/:id", logger, (req, res) => {
  const department = departments.find((department) => department.id === Number(req.params.id));
  if (department) {
    res.status(200).json(department);
  } else {
    res.status(404).json({ error: "Entity not found" });
  }
});

module.exports = router;
