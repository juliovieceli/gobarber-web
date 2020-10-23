import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import Profile from '../pages/Profile';
import ResetPassword from '../pages/ResetPassword';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} exact />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
