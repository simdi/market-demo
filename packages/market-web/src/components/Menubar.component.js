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
      <div className="right menu">
        <a className="ui item">
          Logout
        </a>
      </div>
    </div>
  );
}

export default MenubarComponent;
