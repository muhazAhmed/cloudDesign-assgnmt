const express = require("express");
const router = express.Router();
const taskController = require ("./controller/taskController")

router.get("/", (req,res) => {
    return res.status(200).json("Api is working...")
})

router.post("/task/new", taskController.createTask)
router.put("/task/update/:id", taskController.editTask)
router.get("/tasks", taskController.getTasks)

module.exports = router