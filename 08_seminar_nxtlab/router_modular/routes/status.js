const express = require("express");
const router = express.Router();
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
router.get("/", logger, (req, res) => {
  res.status(200).json({ message: "succes" });
});

module.exports = router;
