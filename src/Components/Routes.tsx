import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainContainer from '../Routes/Main';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route exact path="/quest" />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Redirect path="*" to="/" />
  </Switch>
);

interface AppRouterProps {
  isLoggedIn: boolean;
}

const AppRouter: React.FC<AppRouterProps> = ({ isLoggedIn }: AppRouterProps) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
