import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import Markets from '../components/Markets.component';
import Map from '../components/Map.component';
import Search from '../components/Search.component';
import { GlobalContext } from '../context';

const MarketPage = props => {
  const context = useContext(GlobalContext);
  const {state, dispatch, getMarkets} = context;
  const { market: { markets } } = state;

  useEffect(() => {
    getMarkets()(dispatch);
  }, [getMarkets,dispatch]);

  return (
    <React.Fragment>
      <Grid columns={2} padded>
        <Grid.Column mobile={16} tablet={8} computer={6}>
          <Search />
          <Markets />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={10} style={{ height: '800px' }}>
          <Map markets={markets} />
        </Grid.Column>
      </Grid>
    </React.Fragment>
  )
}

export default MarketPage;
