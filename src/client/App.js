import React from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({route}) => {
    return (
        <div>
            <h1>This is Header</h1>
            {renderRoutes(route)}
        </div>
    )
}

export default {
    component: App
}