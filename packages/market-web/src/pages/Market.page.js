import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
// import { Container, Row, Col } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import Markets from '../components/Markets.component';
import Map from '../components/Map.component';
import Search from '../components/Search.component';
import { GlobalContext } from '../context';

const MarketPage = props => {
  const context = useContext(GlobalContext);
  const {state, dispatch, getMarkets} = context;
  const { market: { markets } } = state;
  console.log('Context', context);

  useEffect(() => {
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
          <Map markets={markets} />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  )
}

Markets.propTypes = {

}

export default MarketPage;
