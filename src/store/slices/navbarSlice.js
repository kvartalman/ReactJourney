import {createSlice} from "@reduxjs/toolkit";

const navbarSlice = createSlice(
    {
        name: 'navbar',
        initialState: {
            navbarLinks: [
                {id: 0, to: '/', linkName: 'Main', linkId: ''},
                {id: 1, to: '/', linkName: 'Boosters', linkId: ''},
                {id: 2, to: '/', linkName: 'Help', linkId: ''},
                {id: 3, to: 'categories', linkName: 'Categories', linkId: ''},
                {id: 4, to: 'admin-panel', linkName: 'Admin Panel', linkId: ''}
            ],
        },
        reducers: {}
    }
)

export default navbarSlice.reducer