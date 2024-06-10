import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt and updatedAt
);

export const User = mongoose.model('User', userSchema); // based on userSchema

//when model goes to mongodb, it becomes plural, means User will be Users
//this is mongodb standard
