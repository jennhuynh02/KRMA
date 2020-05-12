import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';
import MainPage from "../components/main/main_page";
import NavBarContainer from '../components/navbar/navbar_container';
import TreasureIslandContainer from "./treasure/treasure_island_container";
import CollectionContainer from "./collections/collection_container";
import AdminMainPageContainer from "./moderator/admin_main/admin_main_container"


const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/treasureisland" component={TreasureIslandContainer} />
      <ProtectedRoute exact path="/collection" component={CollectionContainer} />
      <AdminRoute exact path="/adminmainpage" component={AdminMainPageContainer} />
    </Switch>
  </div>
);

export default App;
