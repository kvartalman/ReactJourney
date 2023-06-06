import React from "react";
import Footer from "./Footer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        pagesLinks: state.footer.pagesLinks,
        servicesLinks: state.footer.servicesLinks,
        vacanciesLinks: state.footer.vacanciesLinks,
        paymentIcons: state.footer.paymentIcons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer