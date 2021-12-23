import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sobre" exact component={About} />
                <Route path="/artigos" exact component={Articles} />
            </Switch>
        </BrowserRouter>
    );
}