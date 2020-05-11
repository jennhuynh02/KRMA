import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from "../components/main/main_page";
// import NavBarContainer from './nav/navbar_container';


const App = () => (
  <div>
    <MainPage />
    {/* <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact patch="/new_tweet" component={TweetComposeContainer} />
    </Switch> */}
  </div>
);

export default App;
