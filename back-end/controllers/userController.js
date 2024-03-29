/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
import Jwt from 'jsonwebtoken';
import User from '../models/User';

import createUserToken from '../middleware/create-token';

import getToken from '../middleware/get-Token';

module.exports = class UserController {
  static async ShowUser(req, res) {
    const users = await User.find().select('-password  -createdAt');
    res.status(200).json({ user: users });
  }

  static async Profile(req, res) {
    const token = getToken(req);
    const decoded = Jwt.verify(token, process.env.SECRET);
    const { id } = decoded;

    try {
      const user = await User.findById(id).select('-password -createdAt -updateAt ');
      return res.status(200).json({ user });
    } catch (error) {
      return res.status(500).json({ message: 'Error in server' });
    }
  }

  static async Register(req, res) {
    let img = '';

    if (req.file) {
      img = req.file.filename;
    }
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
        img,
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
      return res.status(400).json({ message: 'The email is required' });
    }

    if (!password) {
      return res.status(400).json({ message: 'The passowrd is required' });
    }

    const user = await User.findOne({ email });

    if (!user) return res.status(422).json({ message: 'This email not exists' });

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) return res.status(422).json({ message: 'Password invalid' });

    await createUserToken(user, req, res);
    return res.status(200);
  }

  static async editUser(req, res) {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }).select('-password');

    if (!user) return res.status(401).json({ message: 'User not exists' });

    let image = 'abc';

    if (req.file) {
      image = req.file.filename;
    }

    const {
      name, phone, email, password, confirmpassword,
    } = req.body;

    if (!name) {
      return res.status(422).json({ message: 'The name is required' });
    }

    if (!phone) {
      return res.status(422).json({ message: 'The phone is required' });
    }

    if (!email) {
      return res.status(422).json({ message: 'The email is required' });
    }

    if (!password) {
      return res.status(400).json({ message: 'The password is required' });
    }

    if (password !== confirmpassword) {
      return res.status(422).json({ message: 'The password is different a confirm password' });
    } if (password === confirmpassword && password != null) {
      const salt = 12;
      const passwordHash = await bcrypt.hash(password, salt);
      user.password = passwordHash;
    }

    const userExists = await User.findOne({ email });

    if (user.email !== email && userExists) {
      return res.status(422).json({ message: 'This email has already exist' });
    }

    user.name = name;
    user.phone = phone;
    user.email = email;
    user.img = image;

    try {
      await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true },
      );

      return res.status(200).json({ message: 'User successfully edit' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) return res.status(400).json({ message: 'User not exists' });

    try {
      await User.deleteOne({ _id: id });
      return res.status(200).json({ nessage: 'User  successfuly deleted' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
};
