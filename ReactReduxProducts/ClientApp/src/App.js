import React from 'react';
import { Route } from 'react-router';
import MainLayout from 'components/layout/main-layout';
import ProductsPage from 'pages/products-page';

import routeTable from 'components/navigation/route-table'

export default () => (
    <MainLayout>
        <Route exact path={routeTable.default} component={ProductsPage} />
        {/* <Route exact path='/product/new' component={ProductEdit} />
        <Route path='/product/:id' component={ProductEdit} /> */}
    </MainLayout>
);
