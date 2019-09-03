import React from 'react';
import { Route } from 'react-router';
import MainLayout from './components/layout/main-layout';
import ProductList from 'components/product/product-list';
import ProductEdit from 'components/product/product-edit';

export default () => (
    <MainLayout>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/product/new' component={ProductEdit} />
        <Route path='/product/:id' component={ProductEdit} />
    </MainLayout>
);
