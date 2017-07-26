import * as types from './actionTypes';
import productsApi from '../api/productsApi';

export function getProductsSuccess(props) {
    const { products } = props;
    return { type: types.GET_PRODUCTS_SUCCESS, products }
}
export function getProductsFailure() {
    return { type: types.GET_PRODUCTS_FAILURE }
}
export function getProducts() {
    return function (dispatch) {
        return productsApi.get().then(products => {
            dispatch(getProductsSuccess({products}));
            return products;
        }).catch(error => {
            dispatch(getProductsFailure());
            return error;
        });
    };
}