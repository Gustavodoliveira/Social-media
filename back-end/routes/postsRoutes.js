import { Router } from 'express';
import postController from '../controllers/postController';
import checkToken from '../middleware/check-token';

const router = Router();

router.get('/', checkToken, postController.ShowPost);
router.get('/mypost', checkToken, postController.myPost);
router.post('/postar', checkToken, postController.Postar);
router.patch('/edit/:id', checkToken, postController.EditPost);
router.delete('/delete/:id', checkToken, postController.DeletePost);

module.exports = router;
