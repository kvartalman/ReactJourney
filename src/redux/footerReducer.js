import React from "react";

let initialState = {
    pagesLinks: [
        ['/', 'Main page'],
        ['#', 'Categories'],
        ['#', 'Boosters'],
        ['#', 'Help'],
        ['#', 'Guides'],
        ['#', 'Contacts'],
        ['adminPanel', 'FAQ']
    ],
    servicesLinks: [
        ['#', 'Game currency'],
        ['#', 'Boost'],
        ['#', 'Achievements'],
        ['#', 'Play with a pro']
    ],
    vacanciesLinks: [
        ['#', 'Become a booster']
    ],
    paymentIcons: [
        ['./payment-icons/mastercard.png', 'mastercard'],
        ['./payment-icons/visa.png', 'visa'],
        ['./payment-icons/qiwi.png', 'qiwi'],
        ['./payment-icons/paypal.png', 'paypal']
    ]
};

const footerReducer = (state = initialState, action) => {
    return state;
}

export default footerReducer