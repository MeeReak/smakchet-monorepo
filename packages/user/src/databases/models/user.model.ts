import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    authId: { type: mongoose.Schema.Types.ObjectId },
    username: {
      type: String,
    },
    role: {
      type: String,
      enum: ["Organizer", "Volunteer"],
    },
    email: { type: String, index: true },
    phoneNumber: {
      type: String,
    },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    createdAt: { type: Date, default: Date.now() },
    profile: {
      type: String,
      default : "https://external-preview.redd.it/fDt7sVZyX_qsBEhLYDeV6U4kpEss9vu_zckdYQ1IP30.jpg?auto=webp&s=793cc48be9d4b31c47ba1d9050fb05547de0b147",
    },
    address: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        delete ret.__v;
      },
    },
  }
);
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
