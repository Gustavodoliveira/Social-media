import Express from 'express';
import cors from 'cors';
import path from 'path';

import UserRoutes from './routes/userRoutes';
import postRoutes from './routes/postsRoutes';

const app = Express();
const port = 5000;

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use(cors());

app.use('/user', UserRoutes);
app.use('/post', postRoutes);

app.listen(port, () => {
  console.log('Server is running');
});
