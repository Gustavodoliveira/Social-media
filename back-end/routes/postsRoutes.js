import { Router } from 'express';
import postController from '../controllers/postController';
import checkToken from '../middleware/check-token';
import { imageUpload } from '../middleware/image-up';

const router = Router();

router.get('/', checkToken, postController.ShowPost);
router.get('/mypost', checkToken, postController.myPost);
router.post('/postar', checkToken, imageUpload.single('image'), postController.Postar);
router.patch('/edit/:id', checkToken, imageUpload.single('image'), postController.EditPost);
router.delete('/delete/:id', checkToken, postController.DeletePost);

module.exports = router;
