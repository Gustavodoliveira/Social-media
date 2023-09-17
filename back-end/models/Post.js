import mongoose from '../db/conn';

const { Schema } = mongoose;

const Posts = mongoose.model(
  'Posts',
  new Schema(
    {
      Title: {
        type: String,
        required: true,
      },
      Content: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
    },
    { timestamps: true },
  ),
);

module.exports = Posts;
