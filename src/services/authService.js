import Amplify, { Auth } from 'aws-amplify';

const username = 'silvaisraelb@gmail.com'
const password = '123456'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-2',
        userPoolId: 'us-east-2_a2y8KZOyp',
        userPoolWebClientId: '3rh5r0472hh0ta7c8bgq3vtpp2'

    }
}

Amplify.configure(appConfig);

const authenticate = async function SignIn() {
    try {
        const user = await Auth.signIn(username, password);

        if (user.challengeName === 'SMS_MFA' ||
            user.challengeName === 'SOFTWARE_TOKEN_MFA') {
            
            await Auth.confirmSignIn(user);
        }   else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            await Auth.completeNewPassword(
                user,           
                password,       
            );
        }
            // The user directly signs in
            const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
            saveAuthenticationToken('Bearer ' + authenticationToken)
            Auth.currentAuthenticatedUser({
                bypassCache: false  
            }).then(user => console.log(user))
            .catch(err => console.log(err));
        
    } catch (err) {
        if (err.code === 'UserNotConfirmedException') {
            // The error happens if the user didn't finish the confirmation step when signing up
            // In this case you need to resend the code and confirm the user
            // About how to resend the code and confirm the user, please check the signUp part
        } else if (err.code === 'PasswordResetRequiredException') {
            // The error happens when the password is reset in the Cognito console
            // In this case you need to call forgotPassword to reset the password
            // Please check the Forgot Password part.
        } else if (err.code === 'NotAuthorizedException') {
            // The error happens when the incorrect password is provided
        } else if (err.code === 'UserNotFoundException') {
            // The error happens when the supplied username/email does not exist in the Cognito user pool
        } else {
            console.log(err);
        }
    }
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