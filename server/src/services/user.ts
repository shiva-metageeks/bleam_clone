import User from "@src/models/user/user";
import { Context } from "@src/types/types";
import { CreateUserInput, UpdateUserInput, LoginUserInput } from "@src/types/user";

class UserService {
    public static async createUser(input: CreateUserInput) {
        const exitingUser = await User.findOne({ firebaseUid: input.firebaseUid });
        if(exitingUser){
            return exitingUser;
        }
        const user = await User.create(input);
        return user;
    }

    public static async updateUser(input: UpdateUserInput, context: Context) {
        console.log("context", context);
        const user = await User.findByIdAndUpdate(context.user?.id, input, { new: true });
        return user;
    }

    public static async loginUser(input: LoginUserInput) {
        const user = await User.findOne({ firebaseUid: input.firebaseUid });
        if(!user){
            throw new Error("User not found.Please signup first");
        }
        return user;
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