import express from 'express';
import { getUser, loginUser, registerUser } from '../Controllers/userController.js';
const router = express();

router.get('/get', getUser);

router.post('/register', registerUser);

// AUTH
router.post('/login', loginUser)

export default router;
