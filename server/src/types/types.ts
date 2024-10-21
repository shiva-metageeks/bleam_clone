export type Context = {
    user?: JWTUser;
    brand?: JWTBrand;
};

export type JWTUser = {
    id: string;
    firebaseUid?: string;
    role: string;
}

export type JWTBrand = {
    id: string;
    email: string;
    role: string;
}


