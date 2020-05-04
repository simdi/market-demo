import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
// import MarketContainer from './container/MarketContainer';
import MarketPage from './pages/Market.page';
import MenubarPage from './pages/Menubar.page';

function App() {
  return (
    <Container>
      <MenubarPage />
      <Route exact path="/" component={MarketPage} />
    </Container>
  );
}

export default App;
