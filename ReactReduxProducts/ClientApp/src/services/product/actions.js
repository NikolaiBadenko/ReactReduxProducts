import { createAction } from 'redux-actions';

export const getAllProductsList = createAction('PRODUCTS.GET_ALL_PRODUCTS_LIST');
export const setAllProductsList = createAction('PRODUCTS.SET_ALL_PRODUCTS_LIST', productList => ({ productList }));

export const getProductById = createAction('PRODUCTS.GET_PRODUCT_BY_ID', id => ({ id }));
export const setCurrentProduct = createAction('PRODUCTS.SET_CURRENT_PRODUCT', product => ({ product }));

export const deleteProduct = createAction('PRODUCTS.DELETE_PRODUCT', id => ({ id }));

export const addOrUpdateProduct = createAction('PRODUCTS.ADD_OR_UPDATE_PRODUCT', product => ({ product }));
