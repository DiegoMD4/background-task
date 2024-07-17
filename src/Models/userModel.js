const userModel = {
    select: `SELECT * FROM users;`,
    insert: `INSERT INTO users(name, password, email) VALUES (?, ?, ?);`,
    login: `SELECT * FROM users WHERE email = ?;`
}


export { userModel };
