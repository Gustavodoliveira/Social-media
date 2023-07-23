import { Router } from 'express';
import UserController from '../controllers/userController';

import checkToken from '../middleware/check-token';

const router = Router();

router.post('/register', UserController.Register);
router.post('/login', UserController.Login);
router.patch('/edit/:id', checkToken, UserController.editUser);

module.exports = router;
