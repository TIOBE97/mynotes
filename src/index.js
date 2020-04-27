import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import loginComponent from "./Login/login";
import signupComponent from "./Signup/signup";
import dashboardComponent from "./Dashboard/dashboard";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import homepageComponent from "./Homepage/homepage";




const firebase= require('firebase');
require('firebase/firestore');
firebase.initializeApp({
    apiKey: "AIzaSyAk1riZmC7vQ1BxDZKt7BPKM_uvRoyTKv0",
    authDomain: "mynotes-6a2f9.firebaseapp.com",
    databaseURL: "https://mynotes-6a2f9.firebaseio.com",
    projectId: "mynotes-6a2f9",
    storageBucket: "mynotes-6a2f9.appspot.com",
    messagingSenderId: "467987302260",
    appId: "1:467987302260:web:601285669de252a68b4e21",
    measurementId: "G-0L8N1VXT3Y"

});

const routing  = (
    <Router>
        <div id='routing-container'>
            <Route exact path='/' component={homepageComponent}>
            </Route>
            <Route exact path='/login' component={loginComponent}></Route>
            <Route exact path='/signup' component={signupComponent}></Route>
            <Route exact path='/dashboard' component={dashboardComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root')
);


serviceWorker.unregister();
