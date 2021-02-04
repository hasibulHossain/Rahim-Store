import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="bg-gray-300 mb-20">
            <ul>
                <li className="text-3xl text-blue-600">
                    &#8477;ahim Store
                </li>
                <li className="text-lg">
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li className="text-lg">
                    <NavLink to="/add-product">Add product</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
