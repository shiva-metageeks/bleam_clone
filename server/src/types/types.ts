export type Context = {
    user?: JWTUser;
};

export type JWTUser = {
    id: string;
    firebaseUid: string;
}


