import express from 'express';
import { getUser, loginUser, postUser } from '../Controllers/userController.js';
const router = express();

router.get('/get', getUser);

router.post('/post', postUser);

// AUTH
router.post('/login', loginUser)

export default router;
