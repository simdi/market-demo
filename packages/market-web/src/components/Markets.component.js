import React, { useContext } from 'react';
import Market from './Market.component';
import { GlobalContext } from '../context';
import LoadingMarketComponent from './LoadingMarket.component';

const Markets = () => {
  const context = useContext(GlobalContext);
  const { state: { market }} = context;
  const { markets, loading } = market;

  return (
    <div>
      {
        loading ? (
          <div className="ui three column stackable grid">
            {  Array(3).fill(3).map((m, i) => <LoadingMarketComponent key={i} />) }
          </div>
        ) : ((markets.length > 0) ? (
          <div className="ui grid container">
            <div className="two column row">
              {markets.map(m => <Market key={m.id} market={m} />)}
            </div>
          </div>
          ) : (<h3>There are no markets to display!</h3>))
      }
    </div>
  )
}

export default Markets

