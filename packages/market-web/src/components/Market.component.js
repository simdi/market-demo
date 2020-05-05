import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <NavLink to="">
    <Icon name='user' />
    16 Friends
  </NavLink>
)

const Market = ({ market }) => {
  return (
    <Card
      image='/images/avatar/large/elliot.jpg'
      header={market.name}
      meta={market.category}
      description={market.description}
      extra={extra}
    />
  )
}

Market.propTypes = {

}

export default Market

