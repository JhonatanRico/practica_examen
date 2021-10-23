import React, { Component } from 'react';
import '../App.css'
import logo from './logocinepolis.jpg'

class Header extends Component {
    render() {
        return (
            <div className="App-header">
            <img src={logo}class="App-logo" alt= 'Foto' />
             </div>
        );
    }
}

export default Header;