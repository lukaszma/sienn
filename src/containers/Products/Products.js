import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../../actions/productsActions';
import Product from '../../components/Product/Product'
import './Products.css';
export class componentName extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            products: []
        }
    }


    componentDidMount = () => {
        this.props.getProducts();
    }


    render() {
        const products = this.props.products;
        return (
            <div className="products-container">
                {Object.keys(products).map(i => <Product key={products[i].productID} product={products[i]} />)}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => bindActionCreators(productsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(componentName);