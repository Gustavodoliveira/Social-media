import 'dotenv/config';
import Jwt from 'jsonwebtoken';

const creteUserToken = async (user, req, res) => {
  const token = Jwt.sign({
    name: user.name,
    id: user._id,
  }, process.env.SECRET);

  res.status(200).json({
    message: 'You are authenticated',
    token,
    userId: user._id,
  });
};

module.exports = creteUserToken;
