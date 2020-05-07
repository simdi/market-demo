import React, { useContext } from 'react';
import { Form, Grid, Button, Message } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { GlobalContext } from '../context';

const PostMarketNew = () => {
  const context = useContext(GlobalContext);
  const {state, dispatch, addMarket } = context;
  const { market: { postLoading, postSuccess }} = state;
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    const address = {
      streetNumber: data.streetNumber,
      street: data.street,
      city: data.city,
      state: data.state,
      country: data.country,
      fullAddress: `${data.streetNumber} ${data.street}, ${data.city}, ${data.state}, ${data.country}`,
    };
    const newData = { 
      ...data,
      imageURLs: data.imageURLs.split(','),
      address,
      streetNumber: undefined,
      street: undefined,
      city: undefined,
      state: undefined,
      country: undefined,
    };
    addMarket(newData)(dispatch);
  }

  return (
    <Grid centered columns={2} style={{ marginBottom: '2em' }}>
      <Grid.Column>
        <h1 style={{ marginTop: '1.5em' }}>Add New Address</h1>
        {
          postSuccess ? (<Message
            success
            header='Your post was successful'
            content='You have successfully added a market'
          />) : null
        }
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          <Form.Field className={classnames({ error: errors.name })}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.name &&
                errors.name.type === 'required' &&
                'You need to provide Name'}
            </span>
            <span className="error">
              {errors.name &&
                errors.name.type === 'minLength' &&
                'Must be 2 or more characters'}
            </span>
          </Form.Field>
          <Form.Field className={classnames({ error: errors.description })}>
            <label htmlFor="description">
              Description
              <textarea
                id="description"
                name="description"
                placeholder="Description..."
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.name &&
                errors.description.type === 'required' &&
                'You need to provide Description'}
            </span>
            <span className="error">
              {errors.name && errors.name.type === 'minLength' && 'Must be 2 or more characters'}
            </span>
          </Form.Field>
          <Form.Field className={classnames({ error: errors.imageURLs })}>
            <label htmlFor="imageURLs">
              Image URLs
              <textarea
                id="imageURLs"
                name="imageURLs"
                placeholder="i.e https://url.com/image1, https://url.com/image2"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.name &&
                errors.imageURLs.type === 'required' &&
                'You need to provide Image URLs'}
            </span>
            <span className="error">
              {errors.name && errors.name.type === 'minLength' && 'Must be 2 or more characters'}
            </span>
          </Form.Field>
          <Form.Field className={classnames({ error: errors.category })}>
            <label htmlFor="category">
              Category
              <input
                id="category"
                name="category"
                type="text"
                placeholder="Sunday Market"
                ref={register({
                  required: true,
                  minLength: 2
                })}
              />
            </label>
            <span className="error">
              {errors.category && errors.category.type === 'required' && 'You need to provide a Category'}
            </span>
            <span className="error">
              {errors.category && errors.category.type === 'minLength' && 'category'}
            </span>
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field className={classnames({ error: errors.streetNumber })}>
              <label htmlFor="streetNumber">
                Number
                <input
                  id="streetNumber"
                  name="streetNumber"
                  type="number"
                  placeholder="15"
                  ref={register({
                    required: true,
                    minLength: 1
                  })}
                />
              </label>
              <span className="error">
                {errors.streetNumber && errors.streetNumber.type === 'required' && 'You need to provide a Street Number'}
              </span>
              <span className="error">
                {errors.streetNumber && errors.streetNumber.type === 'minLength' && 'streetNumber'}
              </span>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.street })}>
              <label htmlFor="street">
                Street Name
                <input
                  id="street"
                  name="street"
                  type="text"
                  placeholder="Allen Avenue"
                  ref={register({
                    required: true,
                    minLength: 2
                  })}
                />
              </label>
              <span className="error">
                {errors.street && errors.street.type === 'required' && 'You need to provide a Street Name'}
              </span>
              <span className="error">
                {errors.street && errors.street.type === 'minLength' && 'street'}
              </span>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.city })}>
              <label htmlFor="city">
                City
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Allen Avenue"
                  ref={register({
                    required: true,
                    minLength: 2
                  })}
                />
              </label>
              <span className="error">
                {errors.city && errors.city.type === 'required' && 'You need to provide a City'}
              </span>
              <span className="error">
                {errors.city && errors.city.type === 'minLength' && 'city'}
              </span>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field className={classnames({ error: errors.state })}>
              <label htmlFor="state">
                State
                <select className="ui compact selection dropdown" id="state" name="state" ref={register}>
                  <option value="Lagos">Lagos</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </label>
              <span className="error">
                {errors.state && errors.state.type === 'required' && 'You need to provide a state Name'}
              </span>
              <span className="error">
                {errors.state && errors.state.type === 'minLength' && 'state'}
              </span>
            </Form.Field>
            <Form.Field className={classnames({ error: errors.country })}>
              <label htmlFor="country">
                Country
                <select className="ui compact selection dropdown" id="country" name="country" ref={register}>
                  <option value="Nigeria">Nigeria</option>
                </select>
              </label>
              <span className="error">
                {errors.country && errors.country.type === 'required' && 'You need to provide a Country Name'}
              </span>
              <span className="error">
                {errors.country && errors.country.type === 'minLength' && 'country'}
              </span>
            </Form.Field>
          </Form.Group>
          <Button primary type="submit" loading={postLoading} disabled={postLoading}>
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default PostMarketNew;
