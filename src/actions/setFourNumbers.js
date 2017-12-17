
export const setFourNumbers = fourNumbers => {
  console.log('setting the four numbers');
  console.log(fourNumbers);
  
  // const input = fourNumbers.split('').join(',');
  // const url = 'https://eu9kn1e2gb.execute-api.us-west-2.amazonaws.com/production/api/v0/solutions?values=' + input;
  // const fetchInit = {
  //   method: 'GET',
  //   headers: {
  //     "Authorization": this.state.accessToken,
  //     "Content-Type": "application/json",
  //   },
  //   cache: 'default',
  // }

  // fetch(url, fetchInit)
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then((something) => {
  //     this.setState({output: JSON.stringify(something['values'], undefined, 2)});
  //   })
  //   .catch(e => {
  //     alert(e.message);
  //   });

  return {
    type: 'SET_FOUR_NUMBERS',
    fourNumbers,
  }
}
