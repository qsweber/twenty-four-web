
export const setFourNumbers = fourNumbers => {
  return async (dispatch, getState) => {
    const inputNumbers = fourNumbers.split('')
    if (inputNumbers.length < 4) {
      return;
    }
    const input = inputNumbers.join(',');
    const url = 'https://eu9kn1e2gb.execute-api.us-west-2.amazonaws.com/production/api/v0/solutions?values=' + input;
    const fetchInit = {
      method: 'GET',
      headers: {
        "Authorization": getState().twentyfour.token,
        "Content-Type": "application/json",
      },
      cache: 'default',
    }

    const result = await fetch(url, fetchInit);

    const resultJson = await result.json();

    const output = JSON.stringify(resultJson['values'], undefined, 2)

    await dispatch({
      type: 'SET_FOUR_NUMBERS',
      fourNumbers,
    });

    await dispatch({
      type: 'SET_OUTPUT',
      output,
    });    
  }
}
