import React, { Component }                         from 'react';
import { render }                                   from 'react-dom';
import { Route, Switch }                            from 'react-router-dom'
import { createStore, applyMiddleware, compose }    from 'redux';
import { Provider }                                 from 'react-redux';
import thunk                                        from 'redux-thunk';
import rootReducer                                  from './rootReducer';
import { BrowserRouter, Router }                    from 'react-router-dom'
import Sidebar                                      from './components/Sidebar/Sidebar';
import Routes                                       from './Routes';

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

render(
    <Provider store={store}>
        <BrowserRouter>
                <div className="wrapper ">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content no-padding-top">
                            <Routes />
                        </div>
                    </div>
                </div>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));