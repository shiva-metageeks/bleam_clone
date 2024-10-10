export type Context = {
    user?: JWTUser;
};

export type JWTUser = {
    id: string;
    email: string;
}

export type CreateUserInput = {
    name: string
    username: string
    email: string
    bio: string
    profileImageUrl: string
}

