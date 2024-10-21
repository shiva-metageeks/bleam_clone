import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IBrand } from "@src/types/brand";
import env from "@src/utils/imports/env";
const {JWT_SECRET} = env;
import { JWTBrand } from "@src/types/types";

// Define the brand schema
const brandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
    },
    profileImageUrl: {
      type: String,
      default: "",
    },
    organizationName: {
      type: String,
      default: "",
    },
    firebaseUid: {
      type: String,
      // required: true,
      // unique: true,
    },
    bio: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: "",
      select: false,
      required: true,
    },
    website: {
      type: String,
      default: "",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    competitions: [{ type: Schema.Types.ObjectId, ref: "Competition" }],
  },
  { timestamps: true }
);

brandSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {

  if (!this.password || !password) {
    return false;
  }
  return await bcrypt.compare(password, this.password);
};

brandSchema.methods.generateAuthToken = function (): string {
  const brand = this as IBrand;
  const token = jwt.sign(
    { id: brand._id, email: brand.email,role:"brand"},
    JWT_SECRET,
    { algorithm: "HS256", expiresIn: "7d" }
  );
  return token;
};

brandSchema.methods.verifyToken = function (token:string):JWTBrand{
  const decoded = jwt.verify(token,JWT_SECRET,{algorithms:["HS256"]});
  return decoded as JWTBrand;
}

brandSchema.pre("save", async function (next) {
  const brand = this as IBrand;
  if (!brand.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  brand.password = await bcrypt.hash(brand.password, salt);
  next();
});

// Define the User model
const BrandModel = model<IBrand>("Brand", brandSchema);

export default BrandModel;
