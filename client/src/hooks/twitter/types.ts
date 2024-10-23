export type AuthResponse ={
    oAuth2WithTwitter:{
        success?: Boolean;
        message?: string;
        url?: string;
    }
}

export type AuthCallBackInput={
    state:string ;
    code:string;
}

export type AuthCallBackResponse={
    oAuth2WithTwitterCallback:{
        success?: Boolean;
        message?: string;
        url?: string;
    }
}

export type TweetResponse={
    sendTweet:{
        success?:Boolean,
        message?:string
    }
}

export type CheckTweetLikeResponse={
    checkTweetLike:{
        success?:Boolean,
        isLiked?:Boolean,
        message?:string
    }
}

export type CheckTweetRetweetResponse={
    checkTweetRetweet:{
        success?:Boolean,
        isRetweeted?:Boolean,
        message?:string
    }
}
