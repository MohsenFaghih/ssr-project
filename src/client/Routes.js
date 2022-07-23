import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import usersList, { loadData } from './components/usersList';

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
export default  [
    {
        path: '/',
        component: Home,
        exact: true

    },
    {
        loadData,
        path: '/users',
        component: usersList,
    }
]


