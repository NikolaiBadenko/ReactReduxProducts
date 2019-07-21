import { handleActions } from 'redux-actions';
import {
    setAllProductsList,
    setCurrentProduct
} from 'services/product/actions';

const defaultState = {
    productList: [],
    currentProduct:{}
};

export const reducer = handleActions({
    [setAllProductsList]: (state, action) => ({ ...state, productList: action.productList }),
    [setCurrentProduct]: (state, action) => ({ ...state, currentProduct: action.product })
}, defaultState);

// export default reducer;
