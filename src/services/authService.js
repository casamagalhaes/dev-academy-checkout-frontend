import Amplify, { Auth } from 'aws-amplify';

const email = 'diegogaspar@devacamy.com'
const password = 'devacademy123'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-1',
        userPoolId: 'us-east-1_hgZEeO5sM',
        userPoolWebClientId: '75l6hoskj27620ljlvvcv67rb2'
    }
}

Amplify.configure(appConfig);

const authenticate = async () => {
    const user = await Auth.signIn(email, password);
    // Auth.completeNewPassword(user, 'devacademy123');
    console.log(user)
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