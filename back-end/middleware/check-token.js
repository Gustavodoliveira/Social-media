import 'dotenv/config';
import Jwt from 'jsonwebtoken';

const checkToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'not exist authHeader' });
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'acesss denied' });

  try {
    const verify = Jwt.verify(token, process.env.SECRET);
    req.user = verify;
    next();
  } catch (e) { return res.status(401).json({ message: 'Token invalid' }); }
};

module.exports = checkToken;
