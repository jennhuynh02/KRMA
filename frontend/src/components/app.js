import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'; // ProtectedRoute
import MainPage from "../components/main/main_page";
// import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import AWSCreateTreasure from './treasure/aws_create_treasure';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/treasure/new" component={AWSCreateTreasure} />

      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact patch="/new_tweet" component={TweetComposeContainer} /> */}
    </Switch>
  </div>
);

export default App;
