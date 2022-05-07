import React from 'react';
import logo from '../../assets/logo.png';

export const Header = () => {

    return (
        <div className="header">
            <img src={logo} className="logo"/>
            <h1>Little-Red-Reader</h1>
        </div>
    )
}