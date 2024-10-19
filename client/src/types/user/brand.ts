export type signUpFormType = {
    name:string;
    organizationName:string;
    website:string;
    email:string;
    password:string;
    term:boolean;
    showPassword:boolean;
}

export type loginFormType = {
    email:string;
    password:string;
    showPassword:boolean;
}

export type signUpLoaderType = {
    signUp:boolean;
}

export type loginLoaderType = {
    login:boolean;
}

export type editFormType = {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
    bio:string;
    profileImageUrl:string;
    organizationName:string;
    website:string;
}

