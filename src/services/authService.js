import Amplify, { Auth } from 'aws-amplify';

const email = 'devacademy@casamagalhaes.com.br'
const password = '7654321'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_UP6iASiyS',
        userPoolWebClientId: '7tavp9jnjaglr83j6pf2f9bjp2'
    }
}

Amplify.configure(appConfig);

const authenticate = async () => {
    const user = await Auth.signIn(email, password);
    console.log(user, "teste");
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