import 'dotenv/config';
import Jwt from 'jsonwebtoken';

import getToken from './get-Token';

import User from '../models/User';

const checkToken = async (req, res, next) => {
  const token = getToken(req);

  if (!token) return res.status(401).json({ message: 'acesss denied' });

  try {
    const verify = Jwt.verify(token, process.env.SECRET);
    req.user = verify;
    next();
  } catch (e) { return res.status(401).json({ message: 'Token invalid' }); }
};

module.exports = checkToken;
