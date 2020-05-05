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
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="field">
                <label>Description</label>
                <textarea type="description" name="pass" placeholder="Description..." />
              </div>
              <div className="field">
                <label>Image URLs</label>
                <textarea type="description" name="pass" placeholder="Description..." />
                <i>Please separate each url with a comma (i.e https://url.com/image1, https://url.com/image2</i>
              </div>
              <div className="field">
                <label>Category</label>
                <input type="text" name="category" placeholder="Category" />
              </div>
              <div className="ui toggle checkbox">
                <input type="checkbox" />
                <label>Code?</label>
              </div>
              <div className="field">
                <label>Category</label>
                <input type="text" name="category" placeholder="Category" />
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
