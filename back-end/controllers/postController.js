import getToken from '../middleware/get-Token';
import Posts from '../models/Post';

module.exports = class postController {
  static async Postar(req, res) {
    const token = getToken();
  }
};
