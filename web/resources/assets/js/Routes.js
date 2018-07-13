import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import Dashboard    from './components/Dashboard/Dashboard';
import NotFound     from './components/Empty';
import Reviews      from './components/Reviews/Reviews';


class Routes extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact={true} path="/" component={Dashboard} /> */}
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/reviews" component={Reviews} />
                {/* 404 not found */}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;