import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductList as getProductListSelector} from 'services/product/selectors';
import {
    getAllProductsList,
    deleteProduct
} from 'services/product/actions';
import ProductCards from 'components/product/product-cards';

class ProductsPage extends PureComponent {
    static propTypes = {
        getProductList: PropTypes.func,
        deleteProductById: PropTypes.func,
        products: PropTypes.array
    }

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        const { products, deleteProductById } = this.props;
        return (
            products && <ProductCards 
                deleteProductById={deleteProductById}
                products={products}
            />
        );
    }
}

const mapStateToProps = state => ({
    products: getProductListSelector(state)
});

const mapDispatchToProps = dispatch => ({
    getProductList: () => {
        dispatch(getAllProductsList());
    },
    deleteProductById: (id) => { dispatch(deleteProduct(id)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
