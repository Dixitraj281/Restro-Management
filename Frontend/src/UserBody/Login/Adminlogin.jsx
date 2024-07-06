import React, { useState } from 'react';
import * as Components from './components';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';





const Adminlogin = () => {
    const navigate = useNavigate();
    const [signIn, toggle] = React.useState(true);
    const [signInFirstName, setSignInFirstName] = useState("");
    const [signInLastName, setSignInLastName] = useState("");
    const [signInMob, setSignInMob]= useState("");
    const [signInEmail, setSignInEmail]= useState("");
    const [signInPass, setSignInPass] = useState("");

    const [login, setLogin]= useState("");
    const [pass, setPass] = useState("");

    const [error, setError]= useState("");

    const handleSignUp = async(e)=>{
        e.preventDefault();
        if(signInFirstName.trim()===""||
        signInLastName.trim()==="" ||
        signInMob.trim()===""||
        signInEmail.trim()===""||
        signInPass.trim()===""){
            Swal.fire('Error!', 'Please fill out all the fields...', 'error');
            setSignInFirstName("");setSignInLastName("");setSignInMob("");setSignInEmail("");setSignInPass("");
            return;
        }
        console.log("enteredSignUp");
        const adminData = {
            firstName:signInFirstName,
            lastName:signInLastName,
            mob:signInMob,
            email:signInEmail,
            pass:signInPass
        }
        console.log(adminData);
        try {
            const response = await fetch("http://localhost:4500/admin/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(adminData),
            });
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            else
            {
                const data = await response.json();
                Swal.fire(data.status);
                setSignInFirstName("");setSignInLastName("");setSignInMob("");setSignInEmail("");setSignInPass("");

                // Swal.fire({
                //     title: "<strong> <u>Hurrah!! Signed Up Successfully!!!</u></strong>",
                //     icon: "info",
                //     html: `
                //       Please <b>verify your email!</b>,
                //       <a href="https://monkeytype.com/" autofocus>Click me</a>,
                      
                //     `,
                //     showCloseButton: true,
                //     showCancelButton: true,
                //     focusConfirm: false,
                //     confirmButtonText: `
                //       <i class="fa fa-thumbs-up"></i> Great!
                //     `,
                //     confirmButtonAriaLabel: "Thumbs up, great!",
                //     cancelButtonText: `
                //       <i class="fa fa-thumbs-down"></i>
                //     `,
                //     cancelButtonAriaLabel: "Thumbs down"
                //   });
            }
          } 
          catch (error) {
            console.log(error);
          }
    }
    const handleLogin = async(e)=>{
        e.preventDefault();
        if(login.trim()===""&&pass.trim()===""){
            Swal.fire('Error!', 'Please Enter Username and Password!', 'error');
            return;
            
        }
        else if(login.trim()===""){
            Swal.fire('Error!', 'Please Enter Username!', 'error');
            setPass("");
            return;
        }
        else if(pass.trim()===""){
            Swal.fire('Error!', 'Please Enter Password!', 'error');
            setLogin("");
            return;

        }
        const adminLoginData = {
            login:login,
            pass:pass
        }
        try{
            const adminlogin = await fetch("http://localhost:4500/admin/login",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminLoginData),
                credentials: 'include'


            });
            if(adminlogin){
                const response = await adminlogin.json();
                
                 if(response.status=='Login Successfully'){
                    const pathToRoute = response.route;
                    
                    localStorage.setItem('adminProfile', JSON.stringify(response.profile));
                    console.log(JSON.parse(localStorage.getItem('adminProfile')));
                    console.log("navigated to the original path",pathToRoute);
                    console.log("hi recieved data down there");
                    console.log(response);
                    window.location.href=pathToRoute;
                }
                else if(response.status=='username does not exists')
                {
                    Swal.fire("User does not exist please signup to create account");
                    setLogin("");
                    setPass("");
                    setTimeout(()=>{
                       document.getElementById('sUpButton').click();
                    },2000);
                   

                }else if(response.status=='Password does not match!! Try again'){
                    Swal.fire("Incorrect Password");
                    setPass("");
    
                }
            }
            
            else{
                Swal.fire("user does not exist! Please Sign Up");
                
            }
       }
       catch(err){
        console.log("could not login the user please try again");
       }



    }
    
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
                        <Components.Title>Hello, Admin!</Components.Title>
                        <Components.Paragraph>
                            Enter your personal details and start your Restaurant journey with us.
                        </Components.Paragraph>
                        <Components.GhostButton id="sUpButton" onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>

            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input type='text'  onChange={(e)=>setSignInFirstName(e.target.value)} placeholder='First Name' value={signInFirstName} />
                    <Components.Input type='text'  onChange={(e)=>setSignInLastName(e.target.value)} placeholder='Last Name' value={signInLastName} />
                    <Components.Input type='text'  onChange={(e)=>setSignInMob(e.target.value)} placeholder='Mobile Number' value={signInMob} />
                    <Components.Input type='email' onChange={(e)=>setSignInEmail(e.target.value)} placeholder='Email' value={signInEmail} />
                    <Components.Input type='password' onChange={(e)=>setSignInPass(e.target.value)} placeholder='Password' value={signInPass} />
                    <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign In</Components.Title>
                    <Components.Input type='email' onChange={(e)=>setLogin(e.target.value)} placeholder='Email' value={login} />
                    <Components.Input type='password' onChange={(e)=>setPass(e.target.value)} placeholder='Password' value={pass} />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button onClick={handleLogin}>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>
        </Components.Container>
    );
}
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

export default Adminlogin;
