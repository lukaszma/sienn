import React from 'react';
import Cookies from 'js-cookie';
import unauthorized from '../utils/unauthorized'

class ProductsApi extends React.Component {
  static get() {
    const headers = {
      'Access-Control-Origin': '*',
      "Authorization": "Bearer " + Cookies.get('access_token')
    };
    return fetch("http://recruits.siennsoft.com/api/products", {
      method: "GET",
      headers: headers
    })
      .then((response) => {
        unauthorized(response);
        return response.json();
      })
  }
}

export default ProductsApi;  