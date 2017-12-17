import React from 'react';
import PinInput from 'react-pin-input';

class FourNumbers extends React.Component {
  onInputChange = (term) => {
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <PinInput id="input" length={4} onChange={this.onInputChange} onComplete={this.onInputChange} />
      </div>
    );
  }
}

export default FourNumbers;
