/**
 *
 * Login
 *
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Hr from 'components/Hr';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ShowLoginTitle from './ShowLoginTitle';
import './login.css';
import shutterstock from '../../images/shutterstock.jpg';

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div>
      <ShowLoginTitle>
        <FormattedMessage {...messages.header} />
      </ShowLoginTitle>
      <Hr />

      <div className="container">
        <div className="split left">
          <div className="centered">
            {/* <img src={hipster} alt="left image"/> */}

            <form>
              <h3>Sign In</h3>

              <div className="form-group">
                <p>Email address</p>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <p>Password</p>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <p className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </p>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="/">password?</a>
              </p>
            </form>
          </div>
        </div>

        <div className="split right">
          <div className="centered">
            <img src={shutterstock} alt="" />
            <p>Registrati</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
