import { IUser } from "@src/types/user";
import { IBrand } from "@src/types/brand";


export type Context = {
    user?: IUser;
    brand?: IBrand;
};

export type JWTUser = {
    id: string;
    identifier: string;
    role: string;
   
}



