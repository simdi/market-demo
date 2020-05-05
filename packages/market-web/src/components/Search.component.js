import React from 'react';
import { Grid } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

// const options = [
//   { key: 'all', text: 'All', value: 'all' },
//   { key: 'articles', text: 'Articles', value: 'articles' },
//   { key: 'products', text: 'Products', value: 'products' },
// ]
function Search(props) {
  return (
    <Grid>
      <div className="ui action input">
        <input type="text" placeholder="Search..." />
        <select className="ui compact selection dropdown">
          <option value="all">All</option>
          <option value="articles">Articles</option>
          <option value="products">Products</option>
        </select>
        <div className="ui button">Search</div>
      </div>
    </Grid>
  )
}

Search.propTypes = {

}

export default Search;

