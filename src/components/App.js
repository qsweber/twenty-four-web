import React, { Component } from 'react';
import PinInput from 'react-pin-input';

import Login from './Login';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', output: '', accessToken: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAccessToken = this.setAccessToken.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleFinished = this.handleFinished.bind(this);
  }

  setAccessToken(accessToken) {
    this.setState({accessToken: accessToken});
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleChangeValue(value, index) {
    console.log(value);
    if (index == 0) {
      this.setState({input: value});
    }

    this.setState({input: this.state.input + `,${value}`});
  }

  handleFinished(value, index) {
    this.setState({input: this.state.input + `,${value}`});
    var myInit = {
      method: 'GET',
      headers: {
        "Authorization": this.state.accessToken,
        "Content-Type": "application/json",
      },
      cache: 'default',
    }
    fetch('https://eu9kn1e2gb.execute-api.us-west-2.amazonaws.com/production/api/v0/solutions?values=' + this.state.input, myInit)
      .then(res => {
        return res.json();
      })
      .then((something) => {
        this.setState({output: JSON.stringify(something['values'], undefined, 2)});
      })
      .catch(e => {
        alert(e);
      });    
  }

  handleSubmit(event) {
    event.preventDefault();
    var myInit = {
      method: 'GET',
      headers: {
        "Authorization": this.state.accessToken,
        "Content-Type": "application/json",
      },
      cache: 'default',
    }
    fetch('https://eu9kn1e2gb.execute-api.us-west-2.amazonaws.com/production/api/v0/solutions?values=' + this.state.input, myInit)
      .then(res => {
        return res.json();
      })
      .then((something) => {
        this.setState({output: JSON.stringify(something['values'], undefined, 2)});
      })
      .catch(e => {
        alert(e);
      });
  }

  render() {
    return (
      <div>
        <Register />
        <Login
          setAccessToken={this.setAccessToken}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <PinInput length={4} onChange={this.handleChangeValue} onComplete={this.handleFinished} />
        </form>
        <pre>{this.state.output}</pre>
      </div>
    );
  }
}

export default App;

App.route = { component: App }
