import Amplify, { Auth } from 'aws-amplify';

const email = 'dev@devacademy.com.br'
const password = '1234567'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_IFrrCNIDt',
        userPoolWebClientId: 'k2pq2hp0bgj02kdt6ha3bdk98'
    }
}

Amplify.configure(appConfig);

const authenticate = async () => {
    await Auth.signIn(email, password);
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