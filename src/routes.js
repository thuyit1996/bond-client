/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Suspense, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect, Link, Router } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticate } from './store/modules/auth/auth.selector';
import { connect } from 'react-redux';

const Home = React.lazy(() => import('./pages/Home'));
const Auth = React.lazy(() => import('./pages/Auth'));

const CONTENT = {
  FirstPage: 'This is the content for the first Page',
  SecondPage: 'This is the content for the second Page',
  ThirdPage: 'This is the content for the third Page',
};

const Routes = ({ isAuthenticate }) => {
  const history = useHistory();
  useEffect(() => {
      history.push('/auth/login');
  }, []);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Route path='/auth' exact render={(props) => <Auth {...props} />} />
        {/*<PrivateRoute path="/" exact component={Home} isAuthenticate={isAuthenticate} /> */}
      </Router>
    </Suspense>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { isAuthenticate } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
        )
      }
    />
  );
};

const mapPropsToState = createStructuredSelector({
  isAuthenticate: selectIsAuthenticate,
});
export default connect(mapPropsToState)(Routes);
