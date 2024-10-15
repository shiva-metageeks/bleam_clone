import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IBrand } from "@src/types/brand";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Ensure you use environment variables for production

// Define the brand schema
const brandSchema = new Schema<IBrand>(
  {
    name: {
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
    profileImageUrl: {
      type: String,
      default: "",
    },
    
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    competitions: [{ type: Schema.Types.ObjectId, ref: "Competition" }],
  },
  { timestamps: true }
);

brandSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

brandSchema.methods.generateAuthToken = function (): string {
  const brand = this as IBrand;
  const token = jwt.sign(
    { _id: brand._id, email: brand.email },
    JWT_SECRET,
    { expiresIn: "7d" } // Token expires in 7 days
  );
  return token;
};

// Define the User model
const BrandModel = model<IBrand>("Brand", brandSchema);

export default BrandModel;
