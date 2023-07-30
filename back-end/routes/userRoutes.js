import { Router } from 'express';
import UserController from '../controllers/userController';
import { imageUpload } from '../middleware/image-up';

import checkToken from '../middleware/check-token';

const router = Router();

router.get('/', checkToken, UserController.ShowUser);
router.post('/register', imageUpload.single('image'), UserController.Register);
router.post('/login', UserController.Login);
router.patch('/edit/:id', checkToken, imageUpload.single('image'), UserController.editUser);
router.delete('/delete/:id', checkToken, UserController.deleteUser);

module.exports = router;
