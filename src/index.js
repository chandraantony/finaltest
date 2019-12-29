import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home'
import Category from './pages/Category'
import ShowEvent from './pages/ShowEvent'
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from "react-redux";
import store from './store';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Switch, Route,} from 'react-router-dom';
import CreateEvent from './pages/CreateEvent';
import MyTicket from './pages/MyTicket';





ReactDOM.render( //<App/>  , document.getElementById('root'));
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} ></Route>
                        <Route path='/home' component={Home} ></Route>
                        <Route path='/register' component={Register} ></Route>
                        <Route path='/login' component={Login} ></Route>
                        <Route path='/category/:id' component={Category} ></Route>
                        <Route path='/mytickets' component={MyTicket} ></Route>
                        <Route path='/event/:id' component={ShowEvent} ></Route>
                        <Route path="/createEvent" component={CreateEvent}></Route>
                    </Switch>
                </Router>
            </Provider>            

    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
