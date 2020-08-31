import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


const Auth = React.lazy(() => import('./pages/Auth/index'));

const App = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <Route path='/auth' render={(props) => <Auth  {...props} />} />
    </Router>
  </Suspense>
);
export default App;
