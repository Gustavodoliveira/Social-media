import Express from 'express';
import cors from 'cors';

const app = Express();
const port = 5000;

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.listen(port, () => {
  console.log('Server is running');
});
