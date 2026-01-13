import mongoose, { Schema } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  verifyCode?: string;
  isVerified?: boolean;
  verifyCodeExpiry?: Date | null;
}

const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Invalid email address"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  avatar: { type: String, default: "" },
  verifyCode: {
    type: String,
    default: "",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyCodeExpiry: {
    type: Date,
    default: null,
  },
});

const userModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", userSchema);
export default userModel;
