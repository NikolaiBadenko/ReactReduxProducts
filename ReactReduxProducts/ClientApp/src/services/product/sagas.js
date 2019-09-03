import { put, takeEvery } from 'redux-saga/effects';
import {
    getAllProductsList,
    setAllProductsList,
    deleteProduct,
    getProductById,
    setCurrentProduct,
    addOrUpdateProduct
} from 'services/product/actions';

function* getAllProductsListSaga() {
    try {
        const url = 'api/ProductApi/GetAllProductsList';
        const productList = yield fetch(url).then(response => response.json(), );
        yield put({type: setAllProductsList, productList: productList});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* getProductByIdSaga(actions) {
    try {
        const url = 'api/ProductApi/GetProductById/'+actions.payload.id;
        const product = yield fetch(url).then(response => response.json(), );
        yield put({type: setCurrentProduct, product: product});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* addOrUpdateProductSaga(actions) {
    try {
        // const url = 'api/ProductApi/GetProductById/'+actions.payload.id;
        // const product = yield fetch(url).then(response => response.json(), );
        // yield put({type: setCurrentProduct, product: product});
        console.log(actions.payload);
        yield
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* deleteProductSaga(actions) {
    try {
        const url = 'api/ProductApi/DeleteProduct';
        yield fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: actions.payload.id})
        });
        yield getAllProductsListSaga();
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* productSaga() {
    yield takeEvery(getAllProductsList, getAllProductsListSaga);
    yield takeEvery(getProductById, getProductByIdSaga);
    yield takeEvery(deleteProduct, deleteProductSaga);
    yield takeEvery(addOrUpdateProduct, addOrUpdateProductSaga);
}

export default productSaga;