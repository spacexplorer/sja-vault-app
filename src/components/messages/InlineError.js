import React from 'react';
import PropTypes from 'prop-types';
/*<a className="section">Store</a>*/

const InlineError = ({text}) => (
    <span style={{color : "#ae5856"}} className="inlineError">{text}</span>
)

InlineError.propTypes = {
    text: PropTypes.string.isRequired
}


/*
class InlineError extends React.Component {
    render(){
        return (
            <div>
                InlineError
            </div>
        )
    };
}
*/

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


export default InlineError;