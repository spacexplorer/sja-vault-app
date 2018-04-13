import React from 'react';
//import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import LoginForm from '../forms/LoginForm';
import BreadCrumb from '../controls/BreadCrumb';
//import { Link } from 'react-router-dom';

const LoginPage = () => (
    <div>
        <BreadCrumb />
        <LoginForm />
    </div>
);

/*


        <div className="ui breadcrumb">
            <Link to="/" className="section">Home</Link>
            <i className="right angle icon divider"></i>
            <Link to="/login" className="active section">Login</Link>
        </div>
*/

/*
const LoginPage = () => (
    <div>
        <h1>LoginPage</h1>
        <div className="ui breadcrumb">
            <Link to="/" className="section">Home</Link>
            <i className="right angle icon divider"></i>
            <Link to="/login" className="active section">Login</Link>
        </div>
        <LoginForm />
    </div>
);
*/
export default LoginPage;