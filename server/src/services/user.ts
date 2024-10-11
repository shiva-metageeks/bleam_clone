import User from "@src/models/user/user";
import { CreateUserInput } from "@src/types/types";

class UserService {
    public static async createUser(input: CreateUserInput) {
        const user = await User.create(input);
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