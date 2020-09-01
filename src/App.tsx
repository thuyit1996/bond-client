import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const Auth = React.lazy(() => import('./pages/Auth/index'));

const App = () => {
  console.log(process.env.REACT_APP_NAME);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Redirect to={{ pathname: '/auth/login' }} />
      </Router>
    </Suspense>
  );
};
export default App;
