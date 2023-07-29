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
      User: {
        name: {
          type: String,
        },
        email: {
          type: String,
        },
      },
    },
    { timestamps: true },
  ),
);

module.exports = Posts;
