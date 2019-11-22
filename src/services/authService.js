import api from "./api";
import Amplify, { Auth } from "aws-amplify";

const email = "ellyofreitas13@gmail.com";
const password = "123456";
const appConfig = {
  Auth: {
    mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: "us-east-1_nZmGg6zHn",
    userPoolWebClientId: "253r3lf4mki7toratsl04lj441"
    // identityPoolId: 'us-east-1:01722b46-cbcf-4db4-b3d3-5adeb8f848e7'
  }
};

Amplify.configure(appConfig);

const authenticate = async () => {
  const userSession = await Auth.signIn(email, password);
  if (userSession.challengeName === "NEW_PASSWORD_REQUIRED") {
    await Auth.completeNewPassword(userSession, password);
  } else {
    const authenticationToken = (await Auth.currentSession())
      .getIdToken()
      .getJwtToken();
    saveAuthenticationToken(authenticationToken);
    api.defaults.headers.Authorization = `Bearer ${authenticationToken}`;
  }
};

const saveAuthenticationToken = authenticationToken => {
  localStorage.setItem("authenticationToken", authenticationToken);
};

const getAuthenticationToken = () => {
  return localStorage.getItem("authenticationToken");
};

export default {
  authenticate,
  saveAuthenticationToken,
  getAuthenticationToken
};
