import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProduct } from 'services/product/selectors';
import {
    getProductById
} from 'services/product/actions';

class ProductEdit extends PureComponent {
    static propTypes = {
        getProduct: PropTypes.func,
        location: {
            pathname: PropTypes.string
        },
        product: PropTypes.object
    }

    componentDidMount() {
        let id = this.props.location.pathname;
        id = id.replace('/product/','');
        this.props.getProduct(id);
    }

    render() {
        return (
            <div className="list-group">
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: getCurrentProduct(state)
});

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => { dispatch(getProductById(id)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);