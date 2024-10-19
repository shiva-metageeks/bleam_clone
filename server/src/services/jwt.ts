import JWT from "jsonwebtoken";
import { JWTUser } from "@src/types/types";
import env from "@src/utils/imports/env";
const {JWT_SECRET} = env;

class JWTService {

    public static async generateTokenForUser(user: JWTUser): Promise<string> {
        console.log("user",user);
        const payload: JWTUser = {
            id: user?.id,
            firebaseUid: user?.firebaseUid,
            role: user?.role
        }

        const token = JWT.sign(payload, JWT_SECRET as string, { algorithm: "HS256" });
        console.log("token",token);
        return token;
    }

    public static verifyToken(token: string): JWTUser {
        const decoded = JWT.verify(token, JWT_SECRET as string, { algorithms: ["HS256"] });
        return decoded as JWTUser;
    }
}

export default JWTService;