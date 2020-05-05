import React from 'react';
// import PropTypes from 'prop-types';
import Market from './Market.component';

function Markets(props) {
  return (
    <div>
      list of markets.
      {
        [1, 2, 3, 4 , 5,6].map(m => {
          return <Market key={m} />
        })
      }
    </div>
  )
}

Markets.propTypes = {

}

export default Markets

