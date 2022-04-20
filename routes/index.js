const express = require("express");
const router = express.Router();
const todoList = require("./todoList.routes")

router.use("/todo", todoList);

module.exports = router;