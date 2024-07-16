const taskModel = {
    select:`SELECT * FROM tasks`,
    selectById: `SELECT * FROM tasks WHERE id = ?`,
    insert: `INSERT INTO tasks (title, description, due_date) VALUES (?, ?, ?)`,
    update: `UPDATE tasks set title=?, description= ? WHERE id = ?`,
    deleteById: `DELETE FROM tasks WHERE id = ?`
}

export { taskModel };
