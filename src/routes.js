/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Suspense, useEffect, } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticate } from './store/modules/auth/auth.selector';
import { connect } from 'react-redux';
const Home = React.lazy(() => import('./pages/Home'));
const Auth = React.lazy(() => import('./pages/Auth'));


const Routes = ({ isAuthenticate }) => {
  const history = useHistory();
  useEffect(() => {
    if (isAuthenticate) {
      history.push('/');
    }
  }, [isAuthenticate])
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/" exact component={Home} isAuthenticate={isAuthenticate} />
      </Switch>
    </Suspense>
  );
}

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
}

const mapPropsToState = createStructuredSelector({
  isAuthenticate: selectIsAuthenticate,
})
export default connect(mapPropsToState)(Routes);
