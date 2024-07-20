import connection from '../Database/config.js';
import { taskModel } from '../Models/taskModel.js';

const getTask = (req, res) => {
    connection.query(taskModel.select, [req.id], (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        return res.status(200).json(result);
    });
};

const getTaskById = (req, res) => {
    const { id } = req.params;

    connection.query(taskModel.selectById, [id, req.id], (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        return res.status(200).json(result);
    });
};

const postTask = (req, res) => {
    const { title, description, due_date } = req.body;
    if(!title || !description || !due_date) return res.json({message: 'One or more fields missing'})
    connection.query(
        taskModel.insert,
        [title, description, due_date, req.id],
        (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
            } else {
                return res.status(200).json({ message: 'inserted correctly' });
            }
        }
    );
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, due_date } = req.body;
    const fields = [];
    const values = [];
    if (title) {
        fields.push(`title = ?`);
        values.push(title);
    }
    if (description) {
        fields.push(`description = ?`);
        values.push(description);
    }
    if (due_date) {
        fields.push(`due_date = ?`);
        values.push(due_date);
    }
     console.log(fields);
     console.log([[...values], id, req.id],);
    connection.query(
        taskModel.update(fields),
        [...values, id, req.id],
        (err, result) => {
            if (err) {
                console.log('Error executing query:', err.stack);
            } else if (result.affectedRows == 0) {
                return res.status(404).json({ message: 'NOT FOUND' });
            }
            res.status(200).json({ message: 'Element modified' });
            return console.log(result);
        }
    );
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    connection.query(taskModel.deleteById, [id, req.id], function (err, result) {
        if (err) {
            console.error('Error executing query:', err.stack);
        } else {
            res.status(200).json({ message: 'deleted correctly' });
            return console.log(result);
        }
    });
};

export { getTask, getTaskById, postTask, updateTask, deleteTask };
