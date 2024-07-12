import connection from '../Database/config.js';

const getTask = async (req, res) => {
    let query = `SELECT * FROM tasks`;
    await connection.query(query, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }

        return res.render('task');
    });
};

const getTaskById = async (req, res) => {
    const { id } = req.params;
    let query = `SELECT * FROM tasks WHERE id = ?`;
    await connection.query(query, [id], (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        return res.status(200).json(result);
    });
};

const postTask = async (req, res) => {
    const { title, description, due_date } = req.body;
    let query = `INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)`;
    await connection.query(query, [title, description, due_date], (err, result) => {
        if (err) {
            console.error('Error executing query:', err.stack);
        } else {
            res.status(200).json({ message: 'inserted correctly' });
            return console.log(result);
        }
    });
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    let query = `UPDATE tasks set title=?, description= ? WHERE id = ?`;
    connection.query(query, [title, description, id], (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        }
        res.status(200).json({ message: 'Element modified' });
        return console.log(result);
    });
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    let sql = `DELETE FROM tasks WHERE id = ?`;
    await connection.query(sql, [id], function (err, result) {
        if (err) {
            console.error('Error executing query:', err.stack);
        } else {
            res.status(200).json({ message: 'deleted correctly' });
            return console.log(result);
        }
    });
};

export { getTask, getTaskById, postTask, updateTask, deleteTask };
