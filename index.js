import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { deadLineTask } from './src/Services/BackgroundTask.js';
import taskRoutes from './src/Routes/task.js';
import userRoutes from './src/Routes/user.js';
import { verifyToken } from './src/jwt/verifyToken.js';

//application settings
const app = express();
app.set('PORT', process.env.PORT || 4000);
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public/'));

//application routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/protected', verifyToken, (req, res) => {
    return res.status(200).json({ message: 'You have access' });
});

app.use('/task', taskRoutes);
app.use('/User', userRoutes);

//server initialization
app.listen(app.get('PORT'), (req, res) => {
    console.log(`🟢 Server started at http://localhost:${app.get('PORT')}`);
});

//Services
deadLineTask();
