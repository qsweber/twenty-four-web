import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as Actions from '../actions';
import Login from '../components/Login';
import FourNumbers from '../components/FourNumbers';
import Output from '../components/Output';
import Register from '../components/Register';

class App extends React.Component {
  render() {
    return (
      <div>
        <Register
          onSubmit={ this.props.actions.registerUser }
        />
        <Login
          onSubmit={ this.props.actions.login }
          checkUser={ this.props.actions.checkUser }
          loginStatus={ this.props.loginStatus }
        />
        <FourNumbers
          setFourNumbers={ this.props.actions.setFourNumbers }
          token={ this.props.token }
        />
        <Output
          output={ this.props.output }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.twentyfour.token,
    output: state.twentyfour.output,
    loginStatus: state.twentyfour.loginStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
