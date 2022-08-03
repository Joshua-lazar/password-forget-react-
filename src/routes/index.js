// Init
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Home from '../containers/Home.js';
import ForgetPassword from '../containers/ForgetPassword.js';
import NewPassword from '../containers/NewPassword.js';

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/forget-password" component={ForgetPassword} />
      <Route path="/forgotpassword/:resetToken" component={NewPassword} />
    </Switch>
  );
};

export default index;
