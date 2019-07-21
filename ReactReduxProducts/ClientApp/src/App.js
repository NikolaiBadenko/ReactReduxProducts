import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import ProductList from 'components/product/product-list';
import ProductEdit from 'components/product/product-edit';

export default () => (
    <Layout>
        <Route exact path='/' component={ProductList} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
        <Route exact path='/product/new' component={ProductEdit} />
        <Route path='/product/:id' component={ProductEdit} />
    </Layout>
);
