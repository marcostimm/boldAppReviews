import React, { Component } from 'react';
import { Link, NavLink, BrowserRouter, Route,Router } from 'react-router-dom';

export default class Sidebar extends Component {


    render() {
        return (
            <div className="sidebar" data-color="danger" data-background-color="white" >
            <div className="logo">
                <img src="img/bold.png" alt="Bold Commerce" />
            </div>
              
            <div className="sidebar-wrapper">
                <Route>
                    <ul className="nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="active" exact to={'/dashboard'}>
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" activeClassName="active" exact to={'/reviews'}>
                            <i className="material-icons">rate_review</i>
                            <p>Reviews</p>
                            </NavLink>
                        </li>

                    </ul>
                </Route>
            </div>
        </div>
        )
    }
}