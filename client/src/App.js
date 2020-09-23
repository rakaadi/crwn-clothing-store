import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";
import Header from "./components/header/Header.component";
import Spinner from "./components/spinner/Spinner.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const ShopPage = lazy(() => import("./pages/shoppage/ShopPage"));
const SignInUpPage = lazy(() => import("./pages/sign-in-up-page/SignInUpPage"));
const CheckoutPage = lazy(() => import("./pages/checkout-page/CheckoutPage"));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();

  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signIn"
            render={() => currentUser ? (<Redirect to="/" />) : (<SignInUpPage />)}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
