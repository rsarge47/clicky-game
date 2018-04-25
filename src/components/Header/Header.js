import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = props => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Clicky-Game</h1>
        <h3> Your Pick: {props.pick} | Score: {props.score} | Top Score: {props.topScore} </h3>
    </header>
);

export default Header;