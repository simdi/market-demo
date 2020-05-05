import React, { useContext, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';
// import { Container, Row, Col } from 'react-bootstrap';

// import PropTypes from 'prop-types';
// import axios from 'axios';
import Markets from '../components/Markets.component';
import Map from '../components/Map.component';
import Search from '../components/Search.component';
import { GlobalContext } from '../context';
// import { FETCH_MARKETS } from '../redux/actions/types';

const MarketPage = props => {
  const context = useContext(GlobalContext);
  const {state,dispatch, getMarkets} = context;
  // const dispatch = useDispatch();
  console.log('Context', context);

  useEffect(() => {
    console.log('Call api');
    // const fetchData = async () => {
    //   const res = await axios.get('http://localhost:8001/api/v1/markets');
    //   console.log('Res', res);
    //   if (res.status === 200 && res.data && res.data.length > 0) {
    //     dispatch({
    //       type: FETCH_MARKETS,
    //       payload: res.data, // in case pagination is disabled
    //     });
    //   }
    // };
    // fetchData();
    getMarkets()(dispatch);
  }, [dispatch]);

  return (
    <React.Fragment>
      <Grid className="page-container">
        <Grid.Row>
          <Grid.Column>
            <Search />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={2} divided padded>
        <Grid.Column width={8}>
          <Markets />
        </Grid.Column>
        <Grid.Column width={8}>
          <Map />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  )
}

Markets.propTypes = {

}

export default MarketPage;
