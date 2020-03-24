import React from "react";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export function SignIn() {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const handleChange = event => {
    event.preventDefault();
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();

    setInputValues({ email: "", password: "" });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={inputValues.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={inputValues.password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SUBMIT</CustomButton>
          <CustomButton onClick={(event)=>{event.preventDefault()
            signInWithGoogle()}} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
