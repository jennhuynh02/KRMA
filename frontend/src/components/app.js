import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from "../components/main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import AWSCreateTreasure from './treasure/aws_create_treasure';
import NavBarContainer from '../components/navbar/navbar_container';
import TreasureIslandContainer from "./treasure/treasure_island_container";
import CreateTreasureContainer from "./treasure/create_treasure_container";
import CollectionContainer from "./collections/collection_container";
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/treasure/new" component={AWSCreateTreasure} />

      {/* <ProtectedRoute exact path="/tweets" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact patch="/new_tweet" component={TweetComposeContainer} /> */}
      {/* <ProtectedRoute exact path="/treasure/create" component={CreateTreasureContainer} /> */}
      <ProtectedRoute exact path="/treasureisland" component={TreasureIslandContainer} />
      <ProtectedRoute exact path="/collection" component={CollectionContainer} />
    </Switch>
  </div>
);

export default App;
