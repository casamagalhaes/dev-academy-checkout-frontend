import Amplify, { Auth } from "aws-amplify";

const USER_EMAIL = "daniellimasilva@alu.ufc.br";
const USER_PASSWORD = "1234567";

const appConfig = {
  Auth: {
    mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: "us-east-1_rrWEcs5tt",
    userPoolWebClientId: "ne6lpp5k182rr2e7kta5k8r94"
  }
};

Amplify.configure(appConfig);

const authenticate = async () => {
  const user = await Auth.signIn(USER_EMAIL, USER_PASSWORD);

  if (
    user.hasOwnProperty("challengeName") &&
    user.challengeName == "NEW_PASSWORD_REQUIRED"
  ) {
    Auth.completeNewPassword(user, USER_PASSWORD);
  }

  const jwt = (await Auth.currentSession()).getIdToken().getJwtToken();
  localStorage.setItem("token", jwt);
};

export default {
  authenticate
};
