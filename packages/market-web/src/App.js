import React, { useContext, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { GlobalContext } from './context';
import jwtDecode from 'jwt-decode';
import helpers from './helpers/helpers';
import history from './helpers/history';
import './App.css';
import Routes from './routes';

function App() {
  const context = useContext(GlobalContext);
  const { dispatch, setCurrentUser, logoutUser,  } = context;

  useEffect(() => {
    if (localStorage.jwtToken) {
      // Set Auth token in headers
      helpers.setAuthToken(localStorage.jwtToken);
      // Decode jwtToken and get user info and expiry
      const decode = jwtDecode(localStorage.jwtToken);
      // Set user and isAuthenticated
      dispatch(setCurrentUser(decode));
      // Logout user if token expires
      const currentTime = Date.now() / 1000;
      if (decode.exp < currentTime) {
        // Logout user
        dispatch(logoutUser());
        // Redirect to login page
        history.push('/login');
      }
    }
  }, [dispatch, logoutUser, setCurrentUser]);
  return (
    <Container className="fluid">
      <Routes />
    </Container>
  );
}

export default App;
