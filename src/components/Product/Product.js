import React from 'react';
import './Product.css';
const Product = (props) => {
    return (
        <div className="card">
            <p className="card-name"><b>{props.product.name}</b></p>
            <p className="card-price">{props.product.price}$</p>
            <p className="card-description">{props.product.description}</p>
        </div>
    )
}

export default Product;