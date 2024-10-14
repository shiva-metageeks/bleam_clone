import User from "@src/models/user/user";
import { Context } from "@src/types/types";
import { CreateUserInput, UpdateUserInput } from "@src/types/user";

class UserService {
    public static async createUser(input: CreateUserInput) {
        const user = await User.create(input);
        return user;
    }

    public static async updateUser(input: UpdateUserInput, context: Context) {
        console.log("context", context);
        const user = await User.findByIdAndUpdate(context.user?.id, input, { new: true });
        return user;
    }

    public static getUsers() {
        return User.find();
    }
    public static getUser(identifier: string) {
        return User.findOne({ $or: [{ username: identifier }, { email: identifier }] });
    }
    public static getUserById(id: string) {
        return User.findById(id);
    }
}

export default UserService;