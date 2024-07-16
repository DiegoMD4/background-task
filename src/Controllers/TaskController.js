import connection from '../Database/config.js';
import { taskModel } from '../Models/taskModel.js';

const getTask = (req, res) => {
    connection.query(taskModel.select, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        return res.status(200).json(result);
    });
};

const getTaskById = (req, res) => {
    const { id } = req.params;

    connection.query(taskModel.selectById, [id], (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        return res.status(200).json(result);
    });
};

const postTask = (req, res) => {
    const { title, description, due_date } = req.body;

    connection.query(
        taskModel.insert,
        [title, description, due_date],
        (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
            } else {
                res.status(200).json({ message: 'inserted correctly' });
                return console.log(result);
            }
        }
    );
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    connection.query(
        taskModel.update,
        [title, description, id],
        (err, result) => {
            if (err) {
                console.log('Error executing query:', err.stack);
            }
            res.status(200).json({ message: 'Element modified' });
            return console.log(result);
        }
    );
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    connection.query(taskModel.deleteById, [id], function (err, result) {
        if (err) {
            console.error('Error executing query:', err.stack);
        } else {
            res.status(200).json({ message: 'deleted correctly' });
            return console.log(result);
        }
    });
};

export { getTask, getTaskById, postTask, updateTask, deleteTask };
