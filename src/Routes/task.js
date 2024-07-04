import express from "express";
import connection from "../database/config.js";
const router = express.Router();

router.get("/get", async (req, res) => {
    let query = `SELECT * FROM tasks`;
    await connection.query(query, (err, result) => {
        if (err) {
            console.log("Error executing query:", err.stack);
        }
        return res.status(200).json(result);
    });
});

router.get("/get/:id", async (req, res) => {
    const { id } = req.params;
    let query = `SELECT * FROM tasks WHERE id = ?`;
    await connection.query(query, [id], (err, result) => {
        if (err) {
            console.log("Error executing query:", err.stack);
        }
        return res.status(200).json(result);
    });
});

router.post("/post", async (req, res) => {
    const requestBody = {
        title: req.body.title,
        description: req.body.description,
        due_date: req.body.due_date,
    };

    let query = `INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)`;
    await connection.query(
        query,
        [requestBody.title, requestBody.description, requestBody.due_date],
        (err, result) => {
            if (err) {
                console.error("Error executing query:", err.stack);
            } else {
                res.status(200).json({ message: "inserted correctly" });
                return console.log(result);
            }
        }
    );
});

router.put("/put/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log({ title, description });
    let query = `UPDATE tasks set title=?, description= ? WHERE id = ?`;
    connection.query(query, [ title, description, id], (err, result) => {
        if (err) {
            console.log("Error executing query:", err.stack);
        }
        return res.status(200).json({ message: "Element modified" });
    });
});

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    let sql = `DELETE FROM tasks WHERE id = ?`;
    await connection.query(sql, [id], function (err, result) {
        if (err) {
            console.error("Error executing query:", err.stack);
        } else {
            res.status(200).json({ message: "deleted correctly" });
            return console.log(result);
        }
    });
});

export default router;
