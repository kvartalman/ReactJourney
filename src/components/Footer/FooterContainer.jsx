import React from "react";
import Footer from "./Footer";
import {connect} from "react-redux";


class FooterClass extends React.Component {
    render() {
        return (
            <Footer
                pagesLinks={this.props.pagesLinks}
                servicesLinks={this.props.servicesLinks}
                vacanciesLinks={this.props.vacanciesLinks}
                paymentIcons={this.props.paymentIcons}
            />
        )
    }
}

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

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(FooterClass);

export default FooterContainer