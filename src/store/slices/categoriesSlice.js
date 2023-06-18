import {createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesLinks: [
            {
                name: 'Heroes of the Storm',
                bg: './backgrounds/ctgBackgrounds/hots.jpeg',
                to: '/hots'
            },
            {
                name: 'League of Legends',
                bg: './backgrounds/ctgBackgrounds/lol.jpg',
                to: '/lol'
            },
            {
                name: 'Dota 2',
                bg: './backgrounds/ctgBackgrounds/dota2.jpeg',
                to: '/dota2'
            },
            {
                name: 'Counter Strike: Global Offensive',
                bg: './backgrounds/ctgBackgrounds/csgo.jpg',
                to: '/'
            },
            {
                name: 'Warface',
                bg: './backgrounds/ctgBackgrounds/warface.jpeg',
                to: '/'
            },
            {
                name: "PlayerUnknown's Battlegrounds",
                bg: './backgrounds/ctgBackgrounds/pubg.jpeg',
                to: '/'
            },
        ]
    },
    reducers: {}
})

export default categoriesSlice.reducer