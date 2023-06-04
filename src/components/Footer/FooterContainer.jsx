import React from "react";
import Footer from "./Footer";


const FooterContainer = (props) => {

    return (
        <Footer
            pagesLinks={props.footer.pagesLinks}
            servicesLinks={props.footer.servicesLinks}
            vacanciesLinks={props.footer.vacanciesLinks}
            paymentIcons={props.footer.paymentIcons}
        />
    )
}

export default FooterContainer