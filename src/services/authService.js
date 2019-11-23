import Amplify, { Auth } from "aws-amplify";

const appConfig = {
  Auth: {
    mandatorySignIn: true,
    region: "us-east-1",
    userPoolId: "us-east-1_yg3RcSoXp",
    userPoolWebClientId: "12ku54p0o13hkelblsbj6uhsl9"
  }
};

Amplify.configure(appConfig);

const authenticate = async () => {
  await Auth.signIn("jailsonsousa11@gmail.com", "novasenha");
  const jwt = (await Auth.currentSession()).getIdToken().getJwtToken();
  localStorage.setItem("token", jwt);
};

export default {
  authenticate
};
