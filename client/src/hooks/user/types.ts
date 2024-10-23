export type CurrentUserResult = {
    getCurrentUser:{
        id:string;
        name:string;
        firebaseUid:string;
        username:string;
        email:string;
        profileImageUrl:string;
        bio:string;
        globalRank:number;
        platformPoints:number;
        isEmailVerified:boolean;
        coverPicture:string;
        socialMedia:SocialMedia[];
        phoneNumber:string;
    }
}

export type SocialMedia={
    socialApp:string;
    socialId:string;
    socialUsername:string;
    socialProfilePicture:string;
    socialAccessToken:string;
    socialRefreshToken:string;
}