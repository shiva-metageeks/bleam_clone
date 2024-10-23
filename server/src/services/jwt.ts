import JWT from "jsonwebtoken";
import { JWTUser } from "@src/types/types";
import env from "@src/utils/imports/env";
const {JWT_SECRET} = env;

class JWTService {

    public static async generateToken(payload: JWTUser): Promise<string> {
        console.log("payload",payload);
        console.log("JWT_SECRET",JWT_SECRET);
        const token = JWT.sign(payload, JWT_SECRET as string, { algorithm: "HS256" });
        console.log("token",token);
        return token;
    }

    public static verifyToken(token: string): JWTUser {
        const decoded = JWT.verify(token, JWT_SECRET as string, { algorithms: ["HS256"] });
        // console.log("decoded",decoded);
        return decoded as JWTUser;
    }
}

export default JWTService;