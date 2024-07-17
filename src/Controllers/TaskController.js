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
    const {id}= req.params;

    connection.query(taskModel.selectById, [id, req.id], (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        return res.status(200).json(result);
    });
};

const postTask = (req, res) => {
    const  {title, description, due_date}  = req.body;
    connection.query(
        taskModel.insert,
        [title, description, due_date, req.id],
        (err, result) => {
            if (err) {
                console.error('Error executing query:', err.stack);
            } else {
                res.status(200).json({ message: 'inserted correctly' });
                return console.log(result[0]);
            }
        }
    );
};

const updateTask = (req, res) => {
    const {id} = req.params;
    const  {title, description, due_date } = req.body;

    connection.query(
        taskModel.update,
        [title, description, due_date, id, req.id],
        (err, result) => {
            if (err) {
                console.log('Error executing query:', err.stack);
            }else if(result.affectedRows == 0){
                return res.status(404).json({message: 'NOT FOUND'})
            }
            res.status(200).json({ message: 'Element modified' });
            return console.log(result);
        }
    );
};

const deleteTask = (req, res) => {
    const {id} = req.params;
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
