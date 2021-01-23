import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components

// Pages
import Home from './pages/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <div id="content">
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Router;