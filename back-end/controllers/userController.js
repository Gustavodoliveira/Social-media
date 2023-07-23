import bcrypt from 'bcrypt';
import User from '../models/User';

import createUserToken from '../middleware/create-token';

module.exports = class UserController {
  static async Register(req, res) {
    const {
      name, phone, email, password, confirmpassword,
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'The name is required' });
    }

    if (!phone) {
      return res.status(400).json({ message: 'The phone is required' });
    }

    if (!email) {
      return res.status(400).json({ message: 'The email is required' });
    }

    if (!password) {
      return res.status(400).json({ message: 'The password is required' });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'The password is different a confirm password' });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(422).json({ message: 'The users already existas' });
    }

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(password, salt);

    try {
      const user = new User({
        name,
        phone,
        email,
        password: passwordHash,
      });

      const newUser = await user.save();

      await createUserToken(newUser, req, res);
    } catch (error) {
      return res.status(500).json({ message: 'Error in server' });
    }
  }

  static async Login(req, res) {
    const { email, password } = req.body;

    if (!email) {
      res.status(400).json({ message: 'The email is required' });
    }

    if (!password) {
      res.status(400).json({ message: 'The passowrd is required' });
    }

    const user = await User.findOne({ email });

    if (!user) return res.status(422).json({ message: 'This email not exists' });

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) return res.status(422).json({ message: 'Password invalid' });

    await createUserToken(user, req, res);
  }
};
