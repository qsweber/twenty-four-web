import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import * as Actions from '../actions';
import Login from '../components/Login';
import FourNumbers from '../components/FourNumbers';
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
        />
        <FourNumbers
          onTermChange={ this.props.actions.setFourNumbers }
          token={ this.props.token }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch) {
  console.log(Actions);
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
