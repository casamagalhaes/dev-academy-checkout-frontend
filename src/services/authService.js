import Amplify, { Auth } from 'aws-amplify';

const email = 'yourdata'
const password = 'yourdata'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'yourdata',
        userPoolWebClientId: 'yourdata',
    }
}

Amplify.configure(appConfig);

const authenticate = async () => {
    await Auth.signIn(email, password);
    const user = Auth.signIn(email, password)
    await Auth.completeNewPassword(user, 'yourdata')
    const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
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