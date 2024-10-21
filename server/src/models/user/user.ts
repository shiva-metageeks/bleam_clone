import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "@src/types/user";
import { JWTUser } from "@src/types/types";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Ensure you use environment variables for production

// Define the user schema
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      default: "",
    },
    email: {
      type: String,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
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
    platformPoints: {
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
      { type: Schema.Types.ObjectId, ref: "UserCompetition" },
    ],
   
    tasks: [
      { type: Schema.Types.ObjectId, ref: "UserTask" },
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
  console.log("user in model",user);
  const token = jwt.sign(
    { id: user._id, firebaseUid: user.firebaseUid,role:"user"},
    JWT_SECRET,
    { algorithm: "HS256", expiresIn: "7d" }
  );
  console.log("token in model",token);
  return token;
};

// Define the User model
const UserModel = model<IUser>("User", userSchema);

export default UserModel;
