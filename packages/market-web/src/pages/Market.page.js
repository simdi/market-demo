import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Markets from '../components/Markets';
import Map from '../components/Map';
import Search from '../components/Search';
import { GlobalContext } from '../context';

const MarketPage = props => {
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8001/api/v1/markets');
      dispatch({
        type: 'FETCH_MARKETS',
        payload: response.data.data || response.data, // in case pagination is disabled
      });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="page-container">
      <div className="search-container">
        <Search />
      </div>
      <div className="market-container">
        <Markets contacts={state.markets} />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  )
}

Markets.propTypes = {

}

export default MarketPage;
