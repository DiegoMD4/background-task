import connection from '../Database/config.js';
import { userModel } from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const saltRounds = 10;

const getUser = (req, res) => {
    connection.query(userModel.select, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        } else {
            res.status(200).json(result);
        }
    });
};

const registerUser = (req, res) => {
    const { name, password, email } = req.body;
    if (!email || !password || !name) {
        res.status(400).json({ message: 'Username, email and password required' });
    }
    bcrypt.hash(password, saltRounds, function (err, hash) {
        connection.query(userModel.insert, [name, hash, email], (err, result) => {
            if (err) {
                console.log('Error executing query:', err.stack);
            } else {
                res.status(200).json(result);
            }
        });
    });
};

// AUTH
const loginUser = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: 'Email and password required' });

    try {
        connection.query(userModel.login, [email], (err, results) => {
            if (err) {
                console.log('Error executing query:', err.stack);
                return res.status(500).json({ message: 'Internal server error' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const user = results[0];
            const match = bcrypt.compare(password, user.password);

            if (match) {
                const token = jwt.sign(
                    { email: user.email, id: user.id },
                    process.env.SECRET_KEY,
                    {
                        expiresIn: '1d',
                    }
                );
                console.log('Generated Token:', token, user.id);
                return res.status(200).json({ message: 'Login successful', user, token });
            } else {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
        });
    } catch (error) {
        console.error('Error checking user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export { getUser, registerUser, loginUser };
