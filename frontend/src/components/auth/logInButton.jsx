import { GoogleLogin } from '@react-oauth/google';

function LogInButton () {
    return(
        <div id='LogInGoogle'>
            <GoogleLogin 
                state_cookie_domain='localhost:5173'
                context='signup'
                shape='pill'
                theme='filled_black'
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    alert('There was an error signing in with Google');
                }}
            />
        </div>
    )

};


export default LogInButton;