const taskModel = {
    select:`SELECT * FROM tasks WHERE user_id = ?`,
    selectById: `SELECT * FROM tasks WHERE id = ? AND user_id = ?`,
    insert: `INSERT INTO tasks (title, description, due_date, user_id) VALUES (?, ?, ?, ?)`,
    update: `UPDATE tasks set title=?, description= ?, due_date = ? WHERE id = ? AND user_id = ?`,
    deleteById: `DELETE FROM tasks WHERE id = ? AND user_id = ?`
}

export { taskModel };
