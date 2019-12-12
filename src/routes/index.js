import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

import List from "../components/Company/Index/List";
import Login from "./../components/Auth/login"

export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/companies" exact/>
            <Route component={List} path="/companies"/>
            <Route component={Login} path="/login"/>
            <Redirect to="/error-404"/>
        </Switch>
    );
}


//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        <Route
            component={ Login }
            path="/login"
        />
    </Switch>
);

/*export const RoutedSidebars = () => (
    <Switch>
        { /!* Other Sidebars: *!/}
        <Route
            component={ SidebarASidebar }
            path="/companies"
        />
    </Switch>
);*/

