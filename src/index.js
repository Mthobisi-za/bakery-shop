import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cart from './Cart';
import Menu from './Menu'
import Slide from './Slide';
import Shop from './Shop';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render( <
    React.StrictMode >
    <Menu / >
    <Slide / >
    <Shop / >
    <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();