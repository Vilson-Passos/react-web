import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';

const Routes = () => {
    return (
    <Switch> 
        <Route
        Route
            exact
            path="/"
            component={ Search }
        />
        <Route
            component={ () => (<div>Page not found</div>) }
        />
    </Switch>
    );   
};

export default Routes;