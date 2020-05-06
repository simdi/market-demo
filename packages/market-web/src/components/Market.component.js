import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const Market = ({ market }) => {
  return (
    <div className="column">
      <Card>
        <div className="ui slide masked reveal image">
          <img src={market.imageURLs[0]} style={{ height: '200px' }} alt={market.name} />
        </div>
        <Card.Content>
          <Card.Header>{market.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{market.category}</span>
          </Card.Meta>
          <Card.Description>
            {market.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='location arrow' />
          {market.address.fullAddress}
        </Card.Content>
      </Card>
    </div>
  )
}

export default Market;

