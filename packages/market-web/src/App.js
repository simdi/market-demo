import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <Container className="fluid">
      <Routes />
    </Container>
  );
}

export default App;
