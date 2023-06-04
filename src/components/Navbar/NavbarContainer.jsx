import Navbar from "./Navbar";


const NavbarContainer = (props) => {

    return <Navbar
        navbarLinks={props.navbar.navbarLinks}
        dropdownLinks={props.navbar.dropdownLinks}
    />
}

export default NavbarContainer