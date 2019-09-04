import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProduct } from 'services/product/selectors';
import {
    getProductById
} from 'services/product/actions';
import { addOrUpdateProduct } from 'services/product/actions';

class ProductEdit extends PureComponent {
    static propTypes = {
        getProduct: PropTypes.func,
        addOrUpdateProduct: PropTypes.func,
        location: {
            pathname: PropTypes.string
        },
        product: PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            description: '',
            rating: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        let id = this.props.location.pathname;
        id = id.replace('/product/','');
        this.props.getProduct(id);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addOrUpdateProduct(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </label>
                <label> Price:
                    <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} />
                </label>
                <label> Description:
                    <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </label>
                <label> Rating:
                    <input type="number" name="rating" value={this.state.rating} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


// public string Name { get; set; }
// public double Price { get; set; }
// public string Description { get; set; }
// public long Rating { get; set; }

const mapStateToProps = state => ({
    product: getCurrentProduct(state)
});

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => { dispatch(getProductById(id)); },
    addOrUpdateProduct: (product) => { dispatch(addOrUpdateProduct(product)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);