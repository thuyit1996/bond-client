import { createSelector } from 'reselect';

const authState = state => state.feature_auth;

export const selectIsAuthenticate = createSelector(
  [authState],
  auth => auth.isAuthenticate
);
