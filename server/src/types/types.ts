export type Context = {
    user?: JWTUser;
    brand?: JWTBrand;
};

export type JWTUser = {
    _id?: string;
    id: string;
    firebaseUid?: string;
    role: string;
    email?:string;
}

export type JWTBrand = {
    _id: string;
    id: string;
    email: string;
    role: string;
}


