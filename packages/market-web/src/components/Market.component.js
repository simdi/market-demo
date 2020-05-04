import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';

const extra = (
  <NavLink>
    <Icon name='user' />
    16 Friends
  </NavLink>
)

const Market = (props) => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

Market.propTypes = {

}

export default Market

