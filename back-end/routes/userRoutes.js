import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/register', UserController.Register);
router.post('/login', UserController.Login);

module.exports = router;
