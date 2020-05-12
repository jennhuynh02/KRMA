import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from "../components/main/main_page";
import AWSCreateTreasure from './treasure/aws_create_treasure';
import NavBarContainer from '../components/navbar/navbar_container';
import TreasureIslandContainer from "./treasure/treasure_island_container";
import CreateTreasureContainer from "./treasure/create_treasure_container";
import CollectionContainer from "./collections/collection_container";
import AdminMainPageContainer from "./moderator/admin_main/admin_main_container"


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <Route exact path="/treasure/new" component={AWSCreateTreasure} /> 
      {/* maybe don't have a route for this, this can just be in the modal on treasure island */}

      {/* <ProtectedRoute exact path="/treasure/create" component={CreateTreasureContainer} /> */}
      <ProtectedRoute exact path="/treasureisland" component={TreasureIslandContainer} />
      <ProtectedRoute exact path="/collection" component={CollectionContainer} />
      <Route exact path="/adminmainpage" component={AdminMainPageContainer} />
    </Switch>
  </div>
);

export default App;
