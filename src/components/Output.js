import React from 'react';

class Output extends React.Component {
  render() {
    const output = this.props.output || [];
    return (
      <div>
        {output.map(item => {
          return <p id="output">{item}</p>
        })}
      </div>
    );
  }
}

export default Output;
