import React, { useEffect } from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSignUp from "./pages/signin-and-signup/signin-and-signup.component";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
// import { setCurrentUser } from "./redux/user/user.action";
import { checkUserSession } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    // let unsuscribeFromAuth = null;
    // unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       dispatch(
    //         setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         })
    //       );
    //     });
    //   } else {
    //     dispatch(setCurrentUser(userAuth));
    //   }
    // });
    // return () => {
    //   unsuscribeFromAuth();
    // };
    dispatch(checkUserSession())
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Helmet>
            <title>eCommerce</title>
          </Helmet>
          <HomePage />
        </Route>
        <Route path="/shop">
          <Helmet>
            <title>Shop</title>
          </Helmet>
          <ShopPage />
        </Route>
        <Route exact path="/signin">
          {currentUser ? (
            <Redirect to="/" />
          ) : (
            <>
              {" "}
              <Helmet>
                <title>Sign In</title>
              </Helmet>
              <SignInandSignUp />
            </>
          )}
        </Route>
        <Route exact path="/contact">
          <Helmet>
            <title>Contact</title>
          </Helmet>
        </Route>
        <Route exact path="/checkout">
          <Helmet>
            <title>Checkout</title>
          </Helmet>
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
