import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
           <Link to="/">Home</Link>
           <Link to="/review">Order review</Link>
           <Link to="/about">about</Link>
           <Link to="/">contact</Link>
        </nav>
    );
};

export default Header;