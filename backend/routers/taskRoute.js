
const express = require("express");
const router = express.Router();
const { 
  createTask, 
  getTasks, 
  getTask, 
  updateTask, 
  deleteTask,deleteAllTasks 
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.post("/create-task", createTask);
router.get("/", getTasks);
router.get("/get-task/:id", getTask);
router.put("/update-task/:id", updateTask);
router.delete("/delete-task/:id", deleteTask);
router.delete("/delete-all",deleteAllTasks)

module.exports = router;
