import React from 'react';
import { SignIn } from '../../components/sign-in/sign-in.component';
import './signin-and-signup.styles.scss';
import { SignUp } from '../../components/sign-up/sign-up.component';

const SignInandSignUp = () =>{
    return <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
}

export default SignInandSignUp;