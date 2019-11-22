import Amplify, { Auth } from 'aws-amplify';

const email = 'jonasdeyvid@hotmail.com'
const password = 'password'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_3IqhbrRtX',
        userPoolWebClientId: '3kdfl3it2o94e66g5tgf00mj3e'
    }
}


Amplify.configure(appConfig);

const authenticate = async () => {
    await Auth.signIn(email, password);
    const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
    console.log(authenticationToken)
    saveAuthenticationToken(authenticationToken)
}

const saveAuthenticationToken = (authenticationToken) => {
    localStorage.setItem('authenticationToken', authenticationToken)
}

const getAuthenticationToken = () => {
    return localStorage.getItem('authenticationToken')
}


export default {
    authenticate,
    saveAuthenticationToken,
    getAuthenticationToken
}