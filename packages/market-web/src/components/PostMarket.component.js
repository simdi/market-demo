import React from 'react';
// import PropTypes from 'prop-types';

const PostMarketComponent = props => {
  return (
    <div className="page-login">
      <div className="ui centered grid container">
        <div className="nine wide column">
          <div className="ui fluid card">
            <div className="content">
            <form className="ui form" method="POST">
              <div className="field">
                <label>User</label>
                <input type="text" name="user" placeholder="User" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="pass" placeholder="Password" />
              </div>
              <button className="ui primary labeled icon button" type="submit">
                Post
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PostMarketComponent.propTypes = {

}

export default PostMarketComponent
