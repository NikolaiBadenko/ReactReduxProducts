import React from 'react';
import { Route } from 'react-router';
import MainLayout from 'components/layout/main-layout';
import ProductsPage from 'pages/products-page';
import QuizPage from 'pages/quiz-page';

import routeTable from 'components/navigation/route-table'

export default () => (
    <MainLayout>
        <Route exact path={routeTable.default} component={ProductsPage} />
        <Route exact path={routeTable.quiz.base} component={QuizPage} />
    </MainLayout>
);
