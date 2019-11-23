import Amplify, { Auth } from 'aws-amplify';

const email = 'jonasdeyvid@hotmail.com'
const password = 'password'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'seu pool aqui',
        userPoolWebClientId: 'seu pool aqui'
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