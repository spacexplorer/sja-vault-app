import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

const BreadCrumb = () => (
    <Breadcrumb>
        <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section href="/Login">Login</Breadcrumb.Section>
    </Breadcrumb>
);

export default BreadCrumb;

/*
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>


<div className="ui breadcrumb">
    <Link to="/" className="section">Home</Link>
    <i className="right angle icon divider"></i>
    <Link to="/login" className="active section">Login</Link>
</div>
*/