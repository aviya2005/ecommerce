import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSignUp from "./pages/signin-and-signup/signin-and-signup.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user})   
     console.log(this.state.currentUser)

    })
    
  }

  render() {
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
            <SignInandSignUp />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
