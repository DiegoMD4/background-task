import mysql from "mysql";

const connection = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
    } else {
        console.log("Connected to the database");
    }
});

export default connection;
