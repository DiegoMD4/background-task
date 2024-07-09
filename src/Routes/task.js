import express from "express";
import connection from "../database/config.js";
import { deleteTask, getTask, getTaskById, postTask, updateTask } from "../Controllers/TaskController.js";
const router = express.Router();

const finishingTask = () => {
    let query = `SELECT *, DATEDIFF(due_date, CURRENT_DATE) AS date_difference
    FROM tasks
    WHERE DATEDIFF(due_date, CURRENT_DATE) = 1`;

    connection.query(query, (err, result) => {
        if (err) console.error("Error executing query:", err.stack);
        console.log(result);
    });
};

(() => {
    setInterval(finishingTask, 60 * 1000);
})();


router.get("/get", getTask);

router.get("/get/:id", getTaskById);

router.post("/post", postTask);

router.put("/put/:id", updateTask);

router.delete("/delete/:id", deleteTask);

export default router;
