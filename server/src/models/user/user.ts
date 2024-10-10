import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "@src/types/user";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Ensure you use environment variables for production

// Define the user schema
const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    profileImageUrl: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    globalRank: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
    },
    socialMedia: [
      {
        socialApp: { type: String },
        socialId: { type: String },
        socialUsername: { type: String },
        socialProfilePicture: { type: String },
        socialAccessToken: { type: String },
        socialRefreshToken: { type: String },
      },
    ],
    joinedCompetitions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Competition",
      },
    ],
    competitionCompleted: [
      {
        type: Schema.Types.ObjectId,
        ref: "Competition",
      },
    ],
    task: [
      {
        task: {
          type: Schema.Types.ObjectId,
          ref: "Task",
        },
        status: {
          type: String,
          enum: ["completed", "not completed"],
          default: "not completed",
        },
        competition: {
          type: Schema.Types.ObjectId,
          ref: "Competition",
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function (): string {
  const user = this as IUser;
  const token = jwt.sign(
    { _id: user._id, email: user.email, username: user.username },
    JWT_SECRET,
    { expiresIn: "7d" } // Token expires in 7 days
  );
  return token;
};

// Define the User model
const User = model<IUser>("User", userSchema);

export default User;
