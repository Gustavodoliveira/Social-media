import mongoose from '../db/conn';

const { Schema } = mongoose;

const User = mongoose.model(
  'User',
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        require: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
    },
    { timestamps: true },
  ),
);

module.exports = User;
