import React, { useContext } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import { GlobalContext } from '../context';

const LoginComponent = () => {
  const context = useContext(GlobalContext);
  const {state, dispatch, loginUser } = context;
  const loginError = state.errors;
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    loginUser(data)(dispatch);
  }

  return (
    <Grid centered columns={2} style={{ marginTop: '3em'}}>
      <Grid.Column className="ui fluid card">
        <h1 style={{ marginTop: '1em' }}>Add New Address</h1>
        {
          loginError.email ? (<div className="ui icon warning message" >
            <i className="lock icon"></i>
            <div className="content">
              <div className="header">
                Login failed!
              </div>
              <p>You might have misspelled your email or password!</p>
            </div>
          </div>) : null
        }
        <Form onSubmit={handleSubmit(onSubmit)} loading={state.loading}>
          <Form.Field className={classnames({ error: errors.email })}>
            <label htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.email &&
                errors.email.type === 'required' &&
                'You need to provide Email'}
            </span>
            <span className="error">
              {errors.email &&
                errors.email.type === 'minLength' &&
                'Must be 2 or more characters'}
            </span>
          </Form.Field>
          <Form.Field className={classnames({ error: errors.password })}>
            <label htmlFor="password">
              Password
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                ref={register({ required: true, minLength: 2 })}
              />
            </label>
            <span className="error">
              {errors.password &&
                errors.password.type === 'required' &&
                'You need to provide Password'}
            </span>
            <span className="error">
              {errors.password &&
                errors.password.type === 'minLength' &&
                'Must be 2 or more characters'}
            </span>
          </Form.Field>
          <Button primary type="submit">
            <i className="unlock alternate icon"></i>
            Login
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default LoginComponent
