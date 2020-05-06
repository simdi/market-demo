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
      List of markets.
      {
        !loading
        ? (markets.map(m => <Market key={m.id} market={m} />))
        : (
          <div className="ui three column stackable grid">
            {  Array(3).fill(3).map((m, i) => <LoadingMarketComponent key={i} />) }
          </div>
        )
      }
    </div>
  )
}

export default Markets

