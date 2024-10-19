export type loginFormType = {
    email:string;
    password:string;
}

export type signUpFormType = {
    name:string;
    email:string;
    password:string;
    term:boolean;
}

export type signUpLoaderType = {
    signUp:boolean;
}

export type editFormType = {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
    bio:string;
    profileImageUrl?:string;
    username?:string;
    
}
