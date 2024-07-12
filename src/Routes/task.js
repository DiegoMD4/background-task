import express from "express";
import connection from "../Database/config.js";
import {deleteTask, getTask, getTaskById, postTask, updateTask} from "../Controllers/taskController.js";
const router = express.Router();

router.get("/get", getTask);

router.get("/get/:id", getTaskById);

router.post("/post", postTask);

router.put("/put/:id", updateTask);

router.delete("/delete/:id", deleteTask);

export default router;
