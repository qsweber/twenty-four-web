import React from 'react';

class Output extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="search">
        <p id="output">{this.props.output}</p>
      </div>
    );
  }
}

export default Output;
