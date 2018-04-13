import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../controls/BreadCrumb';

/*<a className="section">Store</a>*/

const HomePage = () => (
    <div>
        <BreadCrumb />
    </div>
);

/*
    <div>
        <h1>HomePage</h1>
        <div className="ui breadcrumb">
            <Link to="/" className="active section">Home</Link>
            <i className="right angle icon divider"></i>
            <Link to="/login" className="section">Login</Link>
        </div>
    </div>
*/

export default HomePage;