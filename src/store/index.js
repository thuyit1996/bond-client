// import { createStore } from 'redux';


// const store = createStore(rootReducer);

// export default store;


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);
export default store;