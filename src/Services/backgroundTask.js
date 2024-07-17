import connection from '../Database/config.js';
const finishingTask = () => {
    let query = `SELECT *, DATEDIFF(due_date, CURRENT_DATE) AS date_difference
    FROM tasks
    WHERE DATEDIFF(due_date, CURRENT_DATE) = 1`;

    connection.query(query, (err, result) => {
        if (err) console.error('Error executing query:', err.stack);
        console.log(result);
    });
};

function deadLineTask() {
    setInterval(finishingTask, 60 * 60 * 1000);
}

export { deadLineTask };
