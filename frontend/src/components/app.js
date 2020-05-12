import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from "../components/main/main_page";
import NavBarContainer from '../components/navbar/navbar_container';
import TreasureIslandContainer from "./treasure/treasure_island_container";
import CreateTreasureContainer from "./treasure/creature_treasure_container";
import CollectionContainer from "./collections/collection_container";
import AdminMainPageContainer from "./moderator/admin_main/admin_main_container"
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      {/* <ProtectedRoute exact path="/treasure/create" component={CreateTreasureContainer} /> */}
      <ProtectedRoute exact path="/treasureisland" component={TreasureIslandContainer} />
      <ProtectedRoute exact path="/collection" component={CollectionContainer} />
      <Route exact path="/adminmainpage" component={AdminMainPageContainer} />
    </Switch>
  </div>
);

export default App;
