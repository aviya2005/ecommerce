import React from "react";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
// import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.action";

export function SignIn() {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleChange = event => {
    event.preventDefault();
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = inputValues;
    dispatch(emailSignInStart({email: email,password: password}))
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
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
