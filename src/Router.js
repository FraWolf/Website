import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Test from './pages/Test';

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <div id="content">
                    <Switch>
                        <Route exact path='/' component={Test} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;