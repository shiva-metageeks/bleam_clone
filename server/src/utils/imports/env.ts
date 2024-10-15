import dotenv from "dotenv";

dotenv.config();

const envConfig = {
    PORT: process.env.PORT as string,
    NODE_ENV: process.env.NODE_ENV as string,
    MONGO_URI: process.env.MONGO_URI as string,
    FIREBASE_TYPE: process.env.FIREBASE_TYPE as string,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID as string,
    FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID as string,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY as string,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL as string,
    FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI as string,
    FIREBASE_TOKEN_URI: process.env.FIREBASE_TOKEN_URI as string,
    FIREBASE_AUTH_PROVIDER_X509_CERT_URL: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL as string,
    FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID as string,
    FIREBASE_CLIENT_X509_CERT_URL: process.env.FIREBASE_CLIENT_X509_CERT_URL as string,
    FIREBASE_UNIVERSE_DOMAIN: process.env.FIREBASE_UNIVERSE_DOMAIN as string,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY as string,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY as string,
    AWS_REGION: process.env.AWS_REGION as string,
    AWS_BUCKET: process.env.AWS_BUCKET as string,

}

export default envConfig;
