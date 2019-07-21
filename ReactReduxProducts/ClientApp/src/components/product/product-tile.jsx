import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductTile = props => (
    <div className="card" style={{ width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="font-weight-bold">Price: {props.price}$</p>
            <p className="font-weight-bold">Rating: {props.rating}</p>
            <p className="card-text">{props.description}</p>
            <Link type="button" className="btn btn-danger" to={'/product/'+props.id}>Edit</Link>
            <button type="button" className="btn btn-danger" onClick={() => props.deleteProduct(props.id)}>Delete</button>
        </div>
    </div>
);

ProductTile.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    deleteProduct: PropTypes.func
}

export default ProductTile;
