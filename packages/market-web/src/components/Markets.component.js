import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Market from './Market.component';
import { GlobalContext } from '../context';
import LoadingMarketComponent from './LoadingMarket.component';

function Markets(props) {
  const context = useContext(GlobalContext);
  const { state: { market, loading }} = context;
  const { markets } = market;
  console.log('Markets', market);
  return (
    <div>
      list of markets.
      {
        !loading
          ? (markets.map(m => <Market key={m.id} market={m} />))
          : (<div class="ui three column stackable grid">
              {
                Array(3).fill(3).map(m => <LoadingMarketComponent />)
              }
          </div>)
      }

    </div>
  )
}

Markets.propTypes = {

}

export default Markets

