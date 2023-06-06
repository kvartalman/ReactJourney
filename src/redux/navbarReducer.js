

let initialState = {
    navbarLinks: [
        {id: 0, to: '/', linkName: 'Main', linkId: ''},
        {id: 1, to: '/', linkName: 'Boosters', linkId: ''},
        {id: 2, to: '/', linkName: 'Help', linkId: ''},
        {id: 3, to: 'categories', linkName: 'Categories', linkId: ''},
        {id: 4, to: 'admin-panel', linkName: 'Admin Panel', linkId: ''}
    ],
    // dropdownLinks: [
    //     {id: 0, to: 'dota2', linkName: 'Dota 2'},
    //     {id: 1, to: 'lol', linkName: 'League of Legends'},
    //     {id: 2, to: 'hots', linkName: 'Heroes of the Storm'},
    // ]
}

const navbarReducer = (state = initialState, action) => {
    return state;
}

export default navbarReducer;