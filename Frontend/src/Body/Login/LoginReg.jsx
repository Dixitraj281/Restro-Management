import React from 'react';
import * as Components from './components';


const LoginReg = () => {
    const [signIn, toggle] = React.useState(true);
    
    return (
        <Components.Container>
            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To stay connected with us, please login with your personal info.
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Foodies!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start your food journey with us.
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>

            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text' placeholder='First Name' />
                    <Components.Input type='text' placeholder='Last Name' />
                    <Components.Input type='text' placeholder='Mobile Number' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>
        </Components.Container>
    );
}

export default LoginReg;
