import User from "@src/models/user/user";
import { Context, JWTUser } from "@src/types/types";
import { CreateUserInput, UpdateUserInput, LoginUserInput } from "@src/types/user";
import JWTService from "@src/services/jwt";

class UserService {
    public static async createUser(input: CreateUserInput) {
        const exitingUser = await User.findOne({ firebaseUid: input.firebaseUid });
        if(exitingUser){
            throw new Error("User already exists . Please login instead");
        }
        const user = await User.create(input);
        const token = await JWTService.generateToken({id:user._id,identifier:user.firebaseUid,role:"user"} as JWTUser);        
        return token;
    }

    public static async updateUser(input: UpdateUserInput, context: Context) {
        console.log("context", context);
        const user = await User.findByIdAndUpdate(context.user?._id, input, { new: true });
        return user;
    }

    public static async loginUser(input: LoginUserInput) {
        const user = await User.findOne({ firebaseUid: input.firebaseUid });
        if(!user){
            throw new Error("User not found.Please signup first");
        }
        console.log("user",user);
        const token = await JWTService.generateToken({id:user._id,identifier:user.firebaseUid,role:"user"} as JWTUser);
        
        return token;
    }

    public static async getUsers() {
        return await User.find();
    }
    public static async getUser(identifier: string) {
        return await User.findOne({ $or: [{ username: identifier }, { email: identifier }] });
    }
    public static async getUserById(id: string) {
        return await User.findById(id);
    }
}

export default UserService;