export type Context = {
    user?: JWTUser;
};

export type JWTUser = {
    id: string;
    email: string;
}

export type CreateTweetInput = {
    content: string;
    imageUrl?: string;
    authorId: string;
}



