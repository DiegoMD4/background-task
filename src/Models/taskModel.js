const taskModel = {
    select:`SELECT * FROM tasks WHERE user_id = ?`,
    selectById: `SELECT * FROM tasks WHERE id = ? AND user_id = ?`,
    insert: `INSERT INTO tasks (title, description, due_date, user_id) VALUES (?, ?, ?, ?)`,
    update: (fields) =>`UPDATE tasks set ${fields.join(',')} WHERE id = ? AND user_id = ?`,
    deleteById: `DELETE FROM tasks WHERE id = ? AND user_id = ?`
}

export { taskModel };



