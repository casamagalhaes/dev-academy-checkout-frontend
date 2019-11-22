import Amplify, { Auth } from 'aws-amplify';

const username = 'silvaisraelb@gmail.com'
const password = '123456'
const appConfig = {
    Auth: {
        mandatorySignIn: true,
        region: 'us-east-2',
        userPoolId: 'us-east-2_a2y8KZOyp',
        // userPoolWebClientId: '71jnhj4f9klfpf4cbfuvkhmdjj',
        userPoolWebClientId: '3rh5r0472hh0ta7c8bgq3vtpp2'

    }
}

Amplify.configure(appConfig);

const authenticate = async function SignIn() {
    try {
        const user = await Auth.signIn(username, password);

        if (user.challengeName === 'SMS_MFA' ||
            user.challengeName === 'SOFTWARE_TOKEN_MFA') {
            // You need to get the code from the UI inputs
            // and then trigger the following function with a button click
            // const code = getCodeFromUserInput();
            // If MFA is enabled, sign-in should be confirmed with the confirmation code
            const loggedUser = await Auth.confirmSignIn(
                user,   // Return object from Auth.signIn()
                // code,   // Confirmation code  
                // mfaType // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
            );
            console.log("loggedUser.token")
            console.log(loggedUser.token)
            // return loggedUser
        } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
            // const {requiredAttributes} = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
            // You need to get the new password and required attributes from the UI inputs
            // and then trigger the following function with a button click
            // For example, the email and phone_number are required attributes
            // const {username, email, phone_number} = getInfoFromUserInput();
            const loggedUser = await Auth.completeNewPassword(
                user,              // the Cognito User Object
                password,       // the new password
                // OPTIONAL, the required attributes
            );
            console.log("loggedUser")
            console.log(loggedUser)
        } else {
            // The user directly signs in
            const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
            saveAuthenticationToken('Bearer ' + authenticationToken)
            Auth.currentAuthenticatedUser({
                bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
            }).then(user => console.log(user))
            .catch(err => console.log(err));
        }
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

// = async () => {
//     await Auth.signIn(email, password);
//     const authenticationToken = (await Auth.currentSession()).getIdToken().getJwtToken();
//     saveAuthenticationToken(authenticationToken)
// }

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