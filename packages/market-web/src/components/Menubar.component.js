import React, { useContext } from 'react';
// import jwtDecode from 'jwt-decode';
// import helpers from '../helpers/helpers';
import { NavLink } from 'react-router-dom';
// import { setCurrentUser, logoutUser } from '../redux/actions/authAction';
import { GlobalContext } from '../context';

const MenubarComponent = () => {
  const context = useContext(GlobalContext);
  const { state } = context;
  console.log('res', state);
  const { isAuthenticated } = state;
  // let history = useHistory();
  // // let dispatch = useDispatch();
  // // useEffect(() => {
  // //   history.push('/admin/markets');
  // // }, [history]);

  // console.log('Called', localStorage.getItem('jwtToken'));
  // if (localStorage.getItem('jwtToken')) {
  //   // Set Auth token in headers
  //   helpers.setAuthToken(localStorage.getItem('jwtToken'));
  //   // Decode jwtToken and get user info and expiry
  //   const decode = jwtDecode(localStorage.getItem('jwtToken'));
  //   // Set user and isAuthenticated
  //   dispatch(setCurrentUser(decode));
  //   // Logout user if token expires
  //   const currentTime = Date.now() / 1000;
  //   if (decode.exp < currentTime) {
  //     // Logout user
  //     dispatch(logoutUser());
  //     // Clear current profile
  //     // dispatch(clearCurrentProfile);
  //     // Redirect to login page
  //     history.push('/login');
  //     // window.location.href = '/login';
  //   }
  // }

  return (
    <div className="ui fluid menu">
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
        isAuthenticated ? (<NavLink className="ui item" to="">
          Logout
        </NavLink>) :
        (<NavLink className="ui item" to="/auth/login">
          Login
        </NavLink>)
      }
      </div>
    </div>
  );
}

export default MenubarComponent;
