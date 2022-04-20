const express = require("express");
const router = express.Router();
const TodoList = require('../models/todoList.model');
const ToDoListController = require('../controllers/todoList.controller')


router.get("/", async (req, res) => {
    try {
        const tasks = await ToDoListController.getTasks();
        res.status(200).json(tasks);
    } catch (err) {
        console.log({ message: err })
    }
});

router.get("/byName/:name", async (req, res) => {
    try {
        const task = await ToDoListController.getTaskByName(req.params.name);
        res.status(200).json(task);
    } catch (err) {
        console.log({ message: err })
    }
})

router.post("/create", async (req, res) => {
    try {
        const savedTasks = await ToDoListController.addTask(req.body.author, req.body.text);
        res.status(200).json(savedTasks)

    } catch (err) {
        console.log({ message: err })
    }
})

router.patch("/edit/:name", async (req, res) => {
    try {
        const tasks = await ToDoListController.editTask(req.params.name, req.body.text)
        res.status(200).json(tasks);
    } catch (err) {
        console.log({ message: err });
    }

})

router.delete("/byName/:name", async (req, res) => {
    try {
        const task = await ToDoListController.deleteTask(req.params.name)
        res.status(200).json(task);
    } catch (err) {
        console.log({ message: err })
    }
})

module.exports = router;