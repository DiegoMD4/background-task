import express from "express";
import connection from "../database/config.js";
import { deleteTask, getTask, getTaskById, postTask, updateTask } from "../Controllers/TaskController.js";
const router = express.Router();

const cleanUpTask = () => {
    let query = "DELETE FROM tasks";

    connection.query(query, (err, result) => {
        if (err) console.error("Error executing query:", err.stack);
        console.log({result, message: "Database cleaned up"});
    });
};

const startBackgroundTask = () => {
    setInterval(cleanUpTask, 60 * 1000);
};
startBackgroundTask();

router.get("/get", getTask);

router.get("/get/:id", getTaskById);

router.post("/post", postTask);

router.put("/put/:id", updateTask);

router.delete("/delete/:id", deleteTask);

export default router;
