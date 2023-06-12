import Navbar from "./Navbar";
import {connect} from "react-redux";
import React from 'react';

class NavbarClass extends React.Component {
    render() {
        return (
            <Navbar
                navbarLinks={this.props.navbarLinks}
                dropdownLinks={this.props.dropdownLinks}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        navbarLinks: state.navbar.navbarLinks,
        dropdownLinks: state.navbar.dropdownLinks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarClass);

export default NavbarContainer