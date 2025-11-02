export const USERS = {
  successfulLogin: {
    username: "test",
    password: "password123",
  },

  blockedAccount: {
    username: "testblock",
    password: "password123",
  },

  invalidUser: {
    username: "testblock1234",
    password: "random",
  },
  wrongPassword: {
    username: "test",
    password: "wrongPassword",
  },
};

export const MESSAGES = {
   successfulLoginMessage: "User successfully logged in!",
   blockedAccountMessage:   "User blocked!",
   invalidUserMessage: "User not found!",
   wrongPasswordMessage: "Incorrect username or password!",
   wrongPassword3timesMessage: "User temporarily blocked!" 
};