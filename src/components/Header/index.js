import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Login, Logout } from '../../store/modules/auth/auth.action';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthenticate } from '../../store/modules/auth/auth.selector';

const Header = ({ loginHandler, isAuthenticate, logoutHandler }) => {
  const onLogin = () => {
    loginHandler();
  }
  const onLogout = () => {
    logoutHandler();
  }
  return (
    <Container>
      <Link to="/">
        <img src="https://nichemodels.co/wp-content/uploads/2019/03/client-dummy-new.png" alt="Logo" />
      </Link>
      {isAuthenticate ? (
        <button className="btn btn-danger" onClick={onLogout}>Logout</button>
      ) : (
          <button className="btn btn-info" onClick={onLogin}>Login</button>
        )}
    </Container>
  );
}
const mapDispatchToProps = dispatch => ({
  loginHandler: () => dispatch(Login()),
  logoutHandler: () => dispatch(Logout())
});

const mapPropsToState = createStructuredSelector({
  isAuthenticate: selectIsAuthenticate,
})
export default connect(mapPropsToState, mapDispatchToProps)(Header)