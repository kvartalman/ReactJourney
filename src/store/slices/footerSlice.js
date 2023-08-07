import {createSlice} from "@reduxjs/toolkit";

const footerSlice = createSlice(
    {
        name: 'footer',
        initialState: {
            pagesLinks: [
                ['/', 'Main page'],
                ['#', 'Categories'],
                ['#', 'Boosters'],
                ['#', 'Help'],
                ['#', 'Guides'],
                ['#', 'Contacts'],
                ['#', 'FAQ']
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
                ['/payment-icons/mastercard.png', 'mastercard'],
                ['/payment-icons/visa.png', 'visa'],
                ['/payment-icons/qiwi.png', 'qiwi'],
                ['/payment-icons/paypal.png', 'paypal']
            ]
        },
        reducers: {}
    }
)

export default footerSlice.reducer