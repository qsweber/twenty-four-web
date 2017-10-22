import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: '', output: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({output: 'submitted.'})
    // fetch('https://lxurerozs4.execute-api.us-west-2.amazonaws.com/production/?values=' + this.state.input)
    //   .then((res) => res.json())
    //   .then((something) => this.setState({output: something['values']}));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.input} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.output}
      </div>
    );
  }
}

export default App;

App.route = { component: App }
