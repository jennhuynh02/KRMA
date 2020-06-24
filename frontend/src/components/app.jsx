import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';
import TreasureIslandContainer from './treasure/treasure_island_container';
import CollectionContainer from './collections/collection_container';
import TreasureBoxContainer from './treasure/treasure_box_container';
import Modal from './modal/modal';

import MainPage from './main/main_page';
import Splash from './splash_page/splash_page';
// Admin
import ReportsContainer from './moderator/report_inbox/reports_container';
import TreasureContentsContainer from './moderator/box_contents/contents_container';
// import TreasureContainer from './treasure/treasure_container';
import UsersContainer from './moderator/all_users/users_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/enter" component={MainPage} />
      <ProtectedRoute exact path="/treasureisland" component={TreasureIslandContainer} />
      <ProtectedRoute exact path="/collection" component={CollectionContainer} />
      <Route exact path="/treasurebox" component={TreasureBoxContainer} />
      <AdminRoute exact path="/reports" component={ReportsContainer} />
      <AdminRoute exact path="/contents" component={TreasureContentsContainer} />
      <AdminRoute exact path="/users" component={UsersContainer} />
      <Redirect path="/" to="/" />
    </Switch>
  </div>
);

export default App;
