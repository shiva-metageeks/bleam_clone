import admin from "firebase-admin";
import envConfig from "../utils/imports/env";
const { FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY_ID, FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, FIREBASE_TYPE, FIREBASE_AUTH_URI, FIREBASE_TOKEN_URI, FIREBASE_AUTH_PROVIDER_X509_CERT_URL, FIREBASE_CLIENT_ID, FIREBASE_CLIENT_X509_CERT_URL, FIREBASE_UNIVERSE_DOMAIN } = envConfig;

const serviceAccount = {
   type: FIREBASE_TYPE,
   projectId: FIREBASE_PROJECT_ID,
   privateKeyId: FIREBASE_PRIVATE_KEY_ID,
   privateKey: FIREBASE_PRIVATE_KEY,
   clientEmail: FIREBASE_CLIENT_EMAIL,
   authUri: FIREBASE_AUTH_URI,
   tokenUri: FIREBASE_TOKEN_URI,
   authProviderX509CertUrl: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
   clientId: FIREBASE_CLIENT_ID,
   clientX509CertUrl: FIREBASE_CLIENT_X509_CERT_URL,
   universeDomain: FIREBASE_UNIVERSE_DOMAIN,
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
