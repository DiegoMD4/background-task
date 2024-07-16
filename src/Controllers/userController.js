import connection from '../Database/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const saltRounds = 10;
const secretKey = "secret";

const getUser = async (req, res) => {
    let query = `SELECT * FROM users`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log('Error executing query:', err.stack);
        } else {
            res.status(200).json(result);
        }
    });
};

const postUser = async (req, res) => {
    const { name, password, email } = req.body;
    if (!email || !password || !name) {
        res.status(400).json({ message: 'Username, email and password required' });
    }
    bcrypt.hash(password, saltRounds, function (err, hash) {
        let query = `INSERT INTO users(name, password, email) VALUES (?, ?, ?)`;
        connection.query(query, [name, hash, email], (err, result) => {
            if (err) {
                console.log('Error executing query:', err.stack);
            } else {
                res.status(200).json(result);
            }
        });
    });
};

// AUTH
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });


    try {
        let query = `SELECT * FROM users WHERE email = ?`;
        connection.query(query, [email], async (err, results) => {
            if (err) {
                console.log('Error executing query:', err.stack);
                return res.status(500).json({ message: 'Internal server error' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const user = results[0];

            const match = await bcrypt.compare(password, user.password);

            if (match) {
                const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: "1h" });
                console.log('Generated Token:', token);
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





export { getUser, postUser, loginUser};
