import mysql from 'mysql';
import { userTable } from '../Models/userModel.js';
import { taskTable } from '../Models/taskModel.js';

const connection = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

connection.query(userTable, (err, result) => {
    if (err) {
        console.log('Error executing query to create table:', err.stack);
    } else {
        return result;
    }
});

connection.query(taskTable, (err, result) => {
    if (err) {
        console.log('Error executing query to create table:', err.stack);
    } else {
        return result;
    }
});

export default connection;
