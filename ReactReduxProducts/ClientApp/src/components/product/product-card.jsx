import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardBody } from 'reactstrap';

const ProductTile = props => (
    <Card className="col-sm-3">
        <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <p className="font-weight-bold">Price: {props.price}$</p>
            <p className="font-weight-bold">Rating: {props.rating}</p>
            <p className="card-text">{props.description}</p>
            <Link type="button" className="btn btn-danger" to={'/product/'+props.id}>Edit</Link>
            <Button className="btn btn-danger" onClick={() => props.deleteProduct(props.id)}>Delete</Button>
        </CardBody>
    </Card>
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
