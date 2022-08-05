import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import App from './App'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import UsersListPage from './pages/UsersListPage';

// This is common way for routing
/*export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={usersList} />
        </Switch>
    )
}*/
 
// server side routing
export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]


