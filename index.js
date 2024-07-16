import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import taskRoutes from './src/Routes/task.js';
import userRoutes from './src/Routes/user.js';
import { deadLineTask } from './src/Services/BackgroundTask.js'; 
import { verifyToken } from './src/jwt/verifyToken.js';

//application settings
const app = express();
app.set('PORT', process.env.PORT || 4000);


app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//application routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/protected', verifyToken, (req, res) => {
    return res.status(200).json({ message: 'You have access' });
});

app.use('/task', verifyToken, taskRoutes);
app.use('/User', userRoutes);

//server initialization
app.listen(app.get('PORT'), (req, res) => {
    console.log(`🟢 Server started at http://localhost:${app.get('PORT')}`);
});

//Services
deadLineTask();
