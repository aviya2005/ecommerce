import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSignUp from "./pages/signin-and-signup/signin-and-signup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/signin">
          <SignInandSignUp/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
