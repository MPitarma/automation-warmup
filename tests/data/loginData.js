import dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env'), quiet: true });

export const USERS = {
  successfulLogin: {
    // username: process.env.SUCCESSFUL_LOGIN_USERNAME,
    // password: process.env.SUCCESSFUL_LOGIN_PASSWROD,
    username: 'test',
    password: 'password123',
  },

  blockedAccount: {
    // username: process.env.BLOCKED_ACCOUNT_PASSWORD,
    // password: process.env.BLOCKED_ACCOUNT_PASSWORD,
    username: 'testblock',
    password: 'password123',
  },

  invalidUser: {
    // username: process.env.INVALID_USER_USERNAME,
    // password: process.env.INVALID_USER_PASSWORD,
    username: 'testInvalid',
    password: 'password123',
  },
  wrongPassword: {
    // username: process.env.WRONG_PAASSWORD_USERNAME,
    // password: process.env.WRONG_PAASSWORD_PASSWORD,
    username: 'test',
    password: 'testwrongpassword',
  },
};

export const MESSAGES = {
   successfulLoginMessage: "User successfully logged in!",
   blockedAccountMessage:   "User blocked!",
   invalidUserMessage: "User not found!",
   wrongPasswordMessage: "Incorrect username or password!",
   wrongPassword3timesMessage: "User temporarily blocked!" 
};