import {createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categoriesLinks: [
            {
                name: 'Heroes of the Storm',
                bg: '/backgrounds/ctgBackgrounds/hots.jpeg',
                to: '/categories/hots',
                video: '/backgrounds/ctgBackgrounds/videos/hots.mp4'
            },
            {
                name: 'League of Legends',
                bg: '/backgrounds/ctgBackgrounds/lol.jpg',
                to: '/categories/lol',
                video: '/backgrounds/ctgBackgrounds/videos/lol.mp4'
            },
            {
                name: 'Dota 2',
                bg: '/backgrounds/ctgBackgrounds/dota2.jpeg',
                to: '/categories/dota2',
                video: '/backgrounds/ctgBackgrounds/videos/dota2.mp4'
            },
            {
                name: 'Counter Strike: Global Offensive',
                bg: '/backgrounds/ctgBackgrounds/csgo.jpg',
                to: '/',
                video: '/backgrounds/ctgBackgrounds/videos/csgovideo.mp4'
            },
            {
                name: 'Warface',
                bg: '/backgrounds/ctgBackgrounds/warface.jpeg',
                to: '/',
                video: '/backgrounds/ctgBackgrounds/videos/warface.mp4'
            },
            {
                name: "PlayerUnknown's Battlegrounds",
                bg: '/backgrounds/ctgBackgrounds/pubg.jpeg',
                to: '/',
                video: '/backgrounds/ctgBackgrounds/videos/pubg.mp4'
            }
        ]
    },
    reducers: {}
})

export default categoriesSlice.reducer