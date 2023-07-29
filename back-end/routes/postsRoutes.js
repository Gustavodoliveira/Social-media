import { Router } from 'express';
import postController from '../controllers/postController';
import checkToken from '../middleware/check-token';

const router = Router();

router.post('/postar', checkToken, postController.Postar);
router.patch('/edit/:id', checkToken, postController.EditPost);

module.exports = router;
