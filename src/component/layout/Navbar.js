import React from 'react'
import PropTypes from 'prop-types'


const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                {/* {this.prop.<prop name> is how we access the prop that is being sent in.} */}
                <i className={icon}> </i> {title}
            </h1>
        </nav>
    );
};

// These are default props that will take over if nothing gets passed in from app.js.
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};
// PropTypes
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};

export default Navbar
