import Amplify, { Auth } from "aws-amplify";

const email = "publio@mail.com";
const password = "publio321";
const appConfig = {
  Auth: {
    mandatorySignIn: true,
    region: "us-east-2",
    userPoolId: "us-east-2_OBka2IZo4",
    userPoolWebClientId: "1nrnvgn92vnemdkq09bv651pp3"
  }
};

Amplify.configure(appConfig);

const authenticate = async () => {
  await Auth.signIn(email, password);

  const authenticationToken = (await Auth.currentSession())
    .getIdToken()
    .getJwtToken();
  saveAuthenticationToken(authenticationToken);
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
