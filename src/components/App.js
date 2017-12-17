// import React, { Component } from 'react';
// import PinInput from 'react-pin-input';
// import { Grid, Row, Col } from 'react-flexbox-grid';

// import Login from './Login';
// import Register from './Register';
// import './App.css';

// const App = ({token}) => {

//   const handleChangeValue = (value, index) => {
//     return;
//   }

//   const handleFinished = (value, index) => {
//     const input = value.split('').join(',');
//     const url = 'https://eu9kn1e2gb.execute-api.us-west-2.amazonaws.com/production/api/v0/solutions?values=' + input;
//     const fetchInit = {
//       method: 'GET',
//       headers: {
//         "Authorization": this.state.accessToken,
//         "Content-Type": "application/json",
//       },
//       cache: 'default',
//     }

//     fetch(url, fetchInit)
//       .then(res => {
//         return res.json();
//       })
//       .then((something) => {
//         this.setState({output: JSON.stringify(something['values'], undefined, 2)});
//       })
//       .catch(e => {
//         alert(e.message);
//       });    
//   }

//   render() {
//     return (
//       <Grid fluid>
//         <Row end="xs">
//           <Col xs={3} >
//             <Register />
//           </Col>
//           <Col xs={3} >
//             <Login
//               setAccessToken={this.setAccessToken}
//             />
//           </Col>
//         </Row>
//         <Row center="xs">
//           <Col xs={6}>
//             <PinInput id="input" length={4} onChange={this.handleChangeValue} onComplete={this.handleFinished} />
//           </Col>
//         </Row>
//         <Row center="xs">
//           <Col xs={6}>
//             <pre>{this.state.output}</pre>
//           </Col>
//         </Row>
//       </Grid>
//     );
//   }
// }

// export default App;
