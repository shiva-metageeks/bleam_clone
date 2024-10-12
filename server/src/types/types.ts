export type Context = {
    user?: JWTUser;
};

export type JWTUser = {
    firebaseUid: string;
}

export type CreateUserInput = {
    name: string
    firebaseUid: string
    username: string
    email: string
}

