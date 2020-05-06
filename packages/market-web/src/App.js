import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import MarketContainer from './container/MarketContainer';
import MarketPage from './pages/Market.page';
import MenubarPage from './pages/Menubar.page';

import LoginComponent from './components/Login.component';
// import PostMarketComponent from './components/PostMarket.component';
import PostMarketNew from './components/PostMarketNew';
// import { setCurrentUser, logoutUser } from './redux/actions/authAction';


function App() {
  return (
    <Container className="fluid">
      <MenubarPage />
      <Route exact path="/" component={MarketPage} />
      <Route exact path="/auth/login" component={LoginComponent} />
      <Route exact path="/admin/markets" component={PostMarketNew} />
    </Container>
  );
}

export default App;
