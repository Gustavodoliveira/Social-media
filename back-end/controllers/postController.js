import 'dotenv/config';
import jwt from 'jsonwebtoken';
import getToken from '../middleware/get-Token';
import Posts from '../models/Post';
import User from '../models/User';

module.exports = class postController {
  static async Postar(req, res) {
    const token = getToken(req);
    const decoded = jwt.verify(token, process.env.SECRET);
    const Userid = decoded.id;
    console.log(Userid);
    const { Title, Content } = req.body;

    if (!Title) return res.status(422).json({ message: 'The title is required' });
    if (!Content) return res.status(422).json({ message: 'The content is required' });

    try {
      const user = await User.findById(Userid);

      const post = new Posts({
        Title,
        Content,
        user,
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

    if (decoded.id !== post.user._id) return res.status(401).json({ message: 'Not authorization' });
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
};
