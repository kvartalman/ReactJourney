import React from "react";

let initialState = {
    navbarLinks: [
        {id: 0, to: '/', linkName: 'Main', linkId: ''},
        {id: 1, to: '/', linkName: 'Boosters', linkId: ''},
        {id: 2, to: '/', linkName: 'Help', linkId: ''},
    ],
    dropdownLinks: [
        ['dota2', 'Dota 2'],
        ['lol', 'League of Legends'],
        ['hots', 'Heroes of the Storm']
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;