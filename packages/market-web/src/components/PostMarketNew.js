import React, { useContext } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { GlobalContext } from '../context';

const PostMarketNew = () => {
  const context = useContext(GlobalContext);
  const {state, dispatch, addMarket } = context;
  console.log('Context', context);
  console.log('State', state);
  const { register, errors, handleSubmit } = useForm();
  console.log('Error', errors);
  const onSubmit = data => {
    console.log(data);
    const newData = { ...data, imageURLs: data.imageURLs.split(',') };
    addMarket(newData)(dispatch);
  }

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <h1 style={{ marginTop: '1em' }}>Add New Address</h1>
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
          <Form.Field className="ui toggle checkbox">
            <label htmlFor="isAddress">
              Is Address?
              <input
                id="isAddress"
                name="isAddress"
                type="checkbox"
              />
            </label>
          </Form.Field>
          <Form.Field className={classnames({ error: errors.address })}>
            <label htmlFor="address">
              Address
              <input
                id="address"
                name="address"
                type="text"
                placeholder="15 Allen Avenue, Ikeja, Lagos"
                ref={register({
                  required: true,
                  minLength: 2
                })}
              />
            </label>
            <span className="error">
              {errors.address && errors.address.type === 'required' && 'You need to provide a Address'}
            </span>
            <span className="error">
              {errors.address && errors.address.type === 'minLength' && 'address'}
            </span>
            </Form.Field>
              {
          // <Form.Group widths="equal">
          //   <Form.Field className={classnames({ error: errors.lng })}>
          //     <label htmlFor="lng">
          //       Longitude
          //       <input
          //         id="lng"
          //         name="lng"
          //         type="number"
          //         placeholder="3.434"
          //         ref={register({ required: true, minLength: 2 })}
          //       />
          //     </label>
          //     <span className="error">
          //       {errors.lng && errors.lng.type === 'required' && 'You need to provide Longitude'}
          //     </span>
          //     <span className="error">
          //       {errors.lng && errors.lng.type === 'minLength' && 'Must be 2 or more characters'}
          //     </span>
          //   </Form.Field>
          //   <Form.Field className={classnames({ error: errors.lat })}>
          //     <label htmlFor="lat">
          //       Latitude
          //       <input
          //         id="lat"
          //         name="lat"
          //         type="number"
          //         placeholder="73.345"
          //         ref={register({ required: true, minLength: 2 })}
          //       />
          //     </label>
          //     <span className="error">
          //       {errors.lat && errors.lat.type === 'required' && 'You need to provide Latitude'}
          //     </span>
          //     <span className="error">
          //       {errors.lat && errors.lat.type === 'minLength' && 'Must be 2 or more characters'}
          //     </span>
          //   </Form.Field>
          // </Form.Group>
        }
          <Button primary type="submit">
            Save
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default PostMarketNew;
