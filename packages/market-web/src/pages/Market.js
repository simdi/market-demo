import React from 'react';
// import PropTypes from 'prop-types';
import Markets from '../components/Markets';
import Map from '../components/Map';

function MarketPage(props) {
  return (
    <div>

      <Markets />
      <Map />
    </div>
  )
}

Markets.propTypes = {

}

export default MarketPage;

