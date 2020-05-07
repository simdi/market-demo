import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './helpers/history';
import { GlobalContext } from './context';
import MarketPage from './pages/Market.page';
import MenubarPage from './pages/Menubar.page';
import LoginComponent from './components/Login.component';
import PostMarketNew from './components/PostMarket';

const PrivateRoute = ({component: Component, isAuthenticated }) => (
  <Route render={props => isAuthenticated === true
    ? <Component auth={isAuthenticated} {...props} />
    : <Redirect to={{pathname:'/'}} />
  } />
);

const Routes = () => {
  const context = useContext(GlobalContext);
  const { state: { auth } } = context;

  return(
    <div>
      <Router history={history} >
        <MenubarPage />
        <br />
        <div>
          <Switch>
            <Route exact path='/' component={MarketPage} />
            <Route exact path="/auth/login" component={LoginComponent} />
            <PrivateRoute path='/admin/markets' isAuthenticated={auth.isAuthenticated} component={PostMarketNew} />
            <Redirect to={{pathname:'/'}} />
          </Switch>
        </div>
      </Router>
    </div>
  )}

export default Routes;