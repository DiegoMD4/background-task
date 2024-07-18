import connection from '../Database/config.js';
const finishingTask = (id) => {
    let query = `
    SELECT *, DATEDIFF(due_date, CURRENT_DATE) AS date_difference
    FROM tasks
    WHERE user_id = ? AND DATEDIFF(due_date, CURRENT_DATE) = 1
`;

    connection.query(query, [id], (err, result) => {
        if (err) console.error('Error executing query:', err.stack);
        if(result == 0){
            console.log('no task are close to expire')
        }
        console.log(result);
    });
};

function deadLineTask(id) {
    setInterval(() => finishingTask(id), 60 * 60 * 1000);
}

export { deadLineTask };
