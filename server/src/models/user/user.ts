import { Schema, model, Document } from "mongoose";
import  HookNextFunction from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser } from "../../types/types";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Ensure you use environment variables for production

// Define the user schema
const userSchema = new Schema({
    _id: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type: String,
        default: ""
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    googleInfo: {
        googleId: {
            type: String,
            default: ""
        },
        googleAccessToken: {
            type: String,
            default: ""
        },
        googleRefreshToken: {
            type: String,
            default: ""
        }
    },
    discordInfo: {
        discordId: {
            type: String,
            default: ""
        },
        discordAccessToken: {
            type: String,
            default: ""
        },
        discordRefreshToken: {
            type: String,
            default: ""
        }
    },
    twitterInfo: {
        twitterId: {
            type: String,
            default: ""
        },
        twitterAccessToken: {
            type: String,
            default: ""
        }
    },
    telegramInfo: {
        telegramId: {
            type: String,
            default: ""
        },
        telegramAccessToken: {
            type: String,
            default: ""
        }
    },
    rewardInfo: {
        points: {
            type: Number,
            default: 0
        },
    },
    rank: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    },
},
{ timestamps: true }
);


userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
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

export { User };
