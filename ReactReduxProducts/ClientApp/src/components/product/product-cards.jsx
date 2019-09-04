import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CardGroup } from 'reactstrap';
import ProductCard from 'components/product/product-card';
import * as arrayUtils from 'base/utilities/array';

class ProductCards extends PureComponent {
    static propTypes = {
        deleteProductById: PropTypes.func,
        products: PropTypes.array
    }

    render() {
        const { products, deleteProductById } = this.props;
        if (!products) return null;
        const productLines = arrayUtils.chunkArrayInGroups(products,4);
        const productCardLines = productLines.map(productLine => {
            const productCardLine = productLine.map(product => (
                <ProductCard
                    key={product.id}
                    deleteProduct={deleteProductById}
                    { ...product }
                />
            ));
            return (<CardGroup>
                {productCardLine}
            </CardGroup>)

        });

        return (
            <div>
                {productCardLines}
            </div>
        );
    }
}

export default ProductCards;
