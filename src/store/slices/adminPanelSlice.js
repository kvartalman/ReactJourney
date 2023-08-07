import {createSlice} from "@reduxjs/toolkit";

const adminPanelSlice = createSlice(
    {
        name: 'adminPanel',
        initialState: {
            linksList: [
                '/', '/dota2', '/lol', '/hots', '/adminPanel'
            ]
        },
        reducers: {}
    }
)

export default adminPanelSlice.reducer