/* eslint-disable no-underscore-dangle */
import 'dotenv/config';
import jwt from 'jsonwebtoken';
import getToken from '../middleware/get-Token';
import Posts from '../models/Post';

module.exports = class postController {
  static async ShowPost(req, res) {
    const Post = await Posts.find().sort('-createdAt');

    res.status(200).json({ Post });
  }

  static async myPost(req, res) {
    const token = getToken(req);
    const decoded = jwt.verify(token, process.env.SECRET);
    try {
      const post = await Posts.find({ userId: decoded.id }).select('-createdAt -updateAt');

      res.status(200).json({ post });
    } catch (error) {
      res.status(500).json({ message: 'Error in server' });
    }
  }

  static async Postar(req, res) {
    const token = getToken(req);
    const decoded = jwt.verify(token, process.env.SECRET);
    const userId = decoded.id;
    const { Title, Content } = req.body;

    if (!Title) return res.status(422).json({ message: 'The title is required' });
    if (!Content) return res.status(422).json({ message: 'The content is required' });

    try {
      const post = new Posts({
        Title,
        Content,
        userId,
      });

      await post.save();
      res.status(200).json({ message: 'Post saved' });
    } catch (error) {
      res.status(500).json({ message: 'Erro in server' });
    }
  }

  static async EditPost(req, res) {
    const { id } = req.params;
    const token = getToken(req);
    const decoded = jwt.verify(token, process.env.SECRET);

    const post = await Posts.findById(id);

    if (!post) return res.status(400).json({ message: 'Post not exists' });

    if (decoded.id !== post.userId) return res.status(401).json({ message: 'Not authorization' });
    const { Title, Content } = req.body;

    if (!Title) return res.status(400).json({ message: 'The title is required' });
    if (!Content) return res.status(400).json({ message: 'The content is required' });

    post.Title = Title;
    post.Content = Content;

    try {
      await Posts.findOneAndUpdate(
        { _id: post._id },
        { $set: post },
        { new: true },
      );

      res.status(200).json({ message: 'Edit success' });
    } catch (error) {
      res.status(500).json({ message: 'Error in server' });
    }
  }

  static async DeletePost(req, res) {
    const { id } = req.params;
    const token = getToken(req);
    const decoded = jwt.verify(token, process.env.SECRET);

    const post = await Posts.findById(id);

    if (!post) return res.status(400).json({ message: 'Post not exists' });

    if (decoded.id !== post.userId) return res.status(400).json({ message: 'Not authorization' });

    try {
      await Posts.deleteOne({ _id: post._id });
      res.status(200).json({ message: 'Post success delete' });
    } catch (error) {
      res.status(401).json({ message: 'Unhantorized' });
    }
  }

  static async getPostEdit(req, res) {
    const { id } = req.params;
    const token = getToken(req);
    const decoded = jwt.verify(token, process.env.SECRET);

    const post = await Posts.findById(id);

    if (!post) return res.status(400).json({ message: 'Not exists post' });

    if (decoded.id !== post.userId) return res.status(401).json({ message: 'You not authorization' });

    return res.status(200).json({ message: post });
  }
};
