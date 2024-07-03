import express from "express";
import connection from "../database/config.js";
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("This is get task view");
});

router.post("/post", (req, res) => {

  const requestBody = {
    title: req.body.title,
    description: req.body.description,
    due_date: req.body.due_date
  }

  let query = `INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)`;
  connection.query(query, [requestBody.title, requestBody.description, requestBody.due_date], (err, result) => {
    if (err) {
      console.error('Error executing query:', err.stack);
    } else {
      res.status(200).json({ message: 'inserted correctly' });
      return console.log(result);
    }
  });
});

router.put("/put", (req, res) => {
  res.send("This is put task view");
});


router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM tasks WHERE id = ${id}`;
  connection.query(sql, function (err, result) {
    if (err) {
      console.error('Error executing query:', err.stack);
    } else {
      res.status(200).json({ message: 'deleted correctly' });
      return console.log(result);
    }
  });
});

export default router;
