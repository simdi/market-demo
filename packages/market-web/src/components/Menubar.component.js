import React from 'react';
import { NavLink } from 'react-router-dom';

const MenubarComponent = () => {
  return (
    <div className="ui secondary  menu">
      <NavLink className="item" activeClassName="active" exact to="/">
          Home
      </NavLink>
      <NavLink className="item" to="/markets">
          Markets
      </NavLink>
      <NavLink className="item" to="/admin/markets">
          Post Markets
      </NavLink>
      <div className="right menu">
        <NavLink className="ui item" to="">
          Logout
        </NavLink>
        <NavLink className="ui item" to="/auth/login">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default MenubarComponent;
