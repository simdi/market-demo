import React, { useContext } from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context';

const MenubarComponent = () => {
  const context = useContext(GlobalContext);
  const { state, dispatch, logoutUser } = context;
  const { auth : {isAuthenticated }} = state;

  return (
    <div className="ui fluid menu">
      <h3 style={{ padding: '10px 20px', marginTop: '10px', marginBottom: '5px' }}>Market Search</h3>
      <NavLink className="item" activeClassName="active" exact to="/">
          Home
      </NavLink>
    {
      isAuthenticated ? (
        <NavLink className="item" to="/admin/markets">
            Post Markets
        </NavLink>
      ) : null
    }
      <div className="right menu">
      {
        isAuthenticated ? (<Button className="ui item" onClick={() => logoutUser()(dispatch)}>
          <i className="sign-out icon"></i>
          Logout
        </Button>) :
        (<NavLink className="ui item" to="/auth/login" >
          <i className="sign-in icon"></i>
          Login
        </NavLink>)
      }
      </div>
    </div>
  );
}

export default MenubarComponent;
