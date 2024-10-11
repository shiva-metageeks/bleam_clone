import { FacebookAuthProvider,signInWithPhoneNumber, RecaptchaVerifier,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut,TwitterAuthProvider } from 'firebase/auth';
import { auth } from '@/utils/firebase/config';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const ErrorHandler = (error: any) => {
    if(error.code === 'auth/invalid-login-credentials'){
        throw new Error('Invalid email or password');
    }
    else if(error.code === 'auth/too-many-requests'){
        throw new Error('Too many requests. Please try again later.');
    }
    else if(error.code === 'auth/user-not-found'){
        throw new Error('User not found.');
    }
    else if(error.code === 'auth/wrong-password'){
        throw new Error('Wrong password.');
    }
    else if(error.code === 'auth/email-already-in-use'){
        throw new Error('Email already in use.');
    }
    else if(error.code === 'auth/weak-password'){
        throw new Error('Weak password.');
    }
    else if(error.code === 'auth/operation-not-allowed'){
        throw new Error('Operation not allowed.');
    }
    else if(error.code === 'auth/invalid-email'){
        throw new Error('Invalid email.');
    }
    else if(error.code === 'auth/user-disabled'){
        throw new Error('User disabled.');
    }
    else if(error.code === 'auth/network-request-failed'){
        throw new Error('Network request failed.');
    }
    else{
        throw new Error('Something went wrong.');
    }
};

export const emailPasswordLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in:', user);
    return user;
  } catch (error:any) {
    console.error('Error signing in with email and password:', error.message);
    return ErrorHandler(error);
  }
};

const twitterProvider = new TwitterAuthProvider();

export const twitterLogin = async () => {
  try {
    const result = await signInWithPopup(auth, twitterProvider);
    const user = result.user;
    console.log('User signed in with Twitter:', user);
    return user;
  } catch (error:any) {
    console.error('Error signing in with Twitter:', error.message);
    return ErrorHandler(error);
  }
};

// googleLogin.js
const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('User signed in with Google:', user);
    return user;
  } catch (error:any    ) {
    console.error('Error signing in with Google:', error.message);
    return ErrorHandler(error);
  }
};

const facebookProvider = new FacebookAuthProvider();

export const facebookLogin = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    console.log('User signed in with Facebook:', user);
    return user;
  } catch (error:any) {
    console.error('Error signing in with Facebook:', error.message);
    return ErrorHandler(error);
  }
};

// phoneLogin.js

export const setUpRecaptcha = (elementId:string) => {
  window.recaptchaVerifier = new RecaptchaVerifier(auth,elementId , {
  'size': 'invisible',
  'callback': (response:any) => {
   return response;
  }
});
};

export const phoneLogin = async (phoneNumber:string) => {
  try {
    setUpRecaptcha('recaptcha-container'); // Ensure the Recaptcha is set up with an element ID
    const appVerifier = window.recaptchaVerifier;

    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    window.confirmationResult = confirmationResult;
    console.log('OTP sent to:', phoneNumber);
  } catch (error:any) {
    console.error('Error signing in with phone number:', error.message);
    return ErrorHandler(error);
  }
};

// To verify OTP
export const verifyOtp = async (otpCode:string) => {
  try {
    const result = await window.confirmationResult.confirm(otpCode);
    const user = result.user;
    console.log('Phone number verified:', user);
    return user;
  } catch (error:any) {
    console.error('Error verifying OTP:', error.message);
    return ErrorHandler(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out successfully');
  } catch (error:any) {
    console.error('Error signing out:', error.message);
    return ErrorHandler(error);
  }
};
