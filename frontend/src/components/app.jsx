import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util';
import MainContainer from './main/main_container';
import CollectionContainer from './collections/collection_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashPageContainer from './splash_page/splash_page_container';
import ReportsContainer from './admin/report_inbox/reports_container';
import UsersContainer from './admin/all_users/users_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/main" component={MainContainer} />
      <ProtectedRoute exact path="/collection" component={CollectionContainer} />
      <AdminRoute exact path="/reports" component={ReportsContainer} />
      <AdminRoute exact path="/users" component={UsersContainer} />
      <Redirect path="/" to="/" />
    </Switch>
  </div>
);

export default App;
