import React from 'react';
class SessionApi extends React.Component {
  static login(credentials) {
    let data = '';
    for (let i in credentials) {
      data += `${i}=${credentials[i]}&`
    }
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Access-Control-Origin': '*'
    };
    return fetch("http://recruits.siennsoft.com/api/jwt", {
      method: "POST",
      headers: headers,
      body: data
    })
      .then((response) => {
        return response.json();
      })
  }
}

export default SessionApi;  