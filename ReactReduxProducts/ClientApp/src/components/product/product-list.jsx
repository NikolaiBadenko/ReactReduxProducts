import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductList as getProductListSelector} from 'services/product/selectors';
import {
    getAllProductsList,
    deleteProduct
} from 'services/product/actions';
import ProductTile from 'components/product/product-tile';

class ProductList extends PureComponent {
    static propTypes = {
        getProductList: PropTypes.func,
        deleteProductById: PropTypes.func,
        products: PropTypes.array
    }

    componentDidMount() {
        this.props.getProductList();
    }

    render() {
        const productTiles = this.props.products.map(product => (
            <ProductTile
                key={product.id}
                deleteProduct={this.props.deleteProductById}
                { ...product }
            />
        ));
        return (
            <div className="list-group">
                {productTiles}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
