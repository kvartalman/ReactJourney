import {createSlice} from "@reduxjs/toolkit";


const offerPageSlice = createSlice({
    name: 'gameOfferPages',
    initialState: {
        pagesData: {
            dota2:
                {
                    mainTitle: 'Dota 2 Offer',
                    text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
                        'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
                        'I think, size of text should not be too high or too little. Better to find something people ' +
                        'call "golden mean". Anyway, we will see, how it goes.',
                    cardsTitle: 'Offers of the week',
                    offerCardsData: [
                        {id: 0, title: '3000 MMR Boost', text: '35$'},
                        {id: 1, title: 'Low priority', text: '5$'},
                        {id: 2, title: 'Bladeform legacy', text: '25$'},
                        {id: 3, title: '+200 MMR', text: '10$'},
                        {id: 4, title: '+200 MMR', text: '10$'},
                        {id: 5, title: '+200 MMR', text: '10$'}
                    ],
                    panelButton: [
                        {id: 0, link: "/categories/dota2/common-skins", name: "Common skins"},
                        {id: 1, link: "/categories/dota2/uncommon-skins", name: "Uncommon skins"},
                        {id: 2, link: "/categories/dota2/rare-skins", name: "Rare skins"},
                        {id: 3, link: "/categories/dota2/immortal-skins", name: "Immortal skins"},
                        {id: 4, link: "/categories/dota2/arcana", name: "Arcana"},
                        {id: 5, link: "/categories/dota2/mmr-boost", name: "MMR Boost"},
                        {id: 6, link: "/categories/dota2/low-priority", name: "Low priority"},
                        {id: 7, link: "/categories/dota2/coaching", name: "Coaching"},
                        {id: 8, link: "/categories/dota2/party-with-a-pro", name: "Party with a pro"},
                        {id: 9, link: "/categories/dota2/rampage-collection", name: "Rampage collection"},
                        {id: 10, link: "/categories/dota2/account-boost", name: "Account boost"}
                    ],
                    breadCrumbs: {linkNames: [], activeLinkName: 'Dota 2'},
                    canvasCtgData:
                        {
                            placement: 'start', buttonName: 'Offer menu', title: 'Offers'
                        },
                    fullName: 'Dota 2'
                },
            lol:
                {
                    mainTitle: 'League of Legends Offer',
                    text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
                        'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
                        'I think, size of text should not be too high or too little. Better to find something people ' +
                        'call "golden mean". Anyway, we will see, how it goes.',
                    cardsTitle: 'Offers of the week',
                    offerCardsData: [
                        {id: 0, title: '3000 MMR Boost', text: '35$'},
                        {id: 1, title: 'Low priority', text: '5$'},
                        {id: 2, title: 'Bladeform legacy', text: '25$'},
                        {id: 3, title: '+300 MMR', text: '10$'}
                    ],
                    panelButton: [
                        {id: 0, link: "/categories/lol/leveling", name: "Leveling"},
                        {id: 1, link: "/categories/lol/ranked", name: "Ranked"},
                        {id: 2, link: "/categories/lol/game-skins", name: "Game skins"},
                        {id: 3, link: "/categories/lol/low-priority", name: "Low priority"},
                        {id: 4, link: "/categories/lol/coaching", name: "Coaching"},
                        {id: 5, link: "/categories/lol/party-with-a-pro", name: "Party with a pro"},
                        {id: 6, link: "/categories/lol/achievements", name: "Achievements"},
                    ],
                    breadCrumbs: {linkNames: [], activeLinkName: 'League of Legends'},
                    canvasCtgData:
                        {
                            placement: 'start', buttonName: 'Offer menu', title: 'Offers'
                        },
                    fullName: 'League of Legends'

                },
            hots:
                {
                    mainTitle: 'Heroes of the Storm Offer',
                    text: 'I wrote this text just for test. This text means nothing and i will add this text ' +
                        'to most of text-blocks on website. However, i should pay attention to the size of text. ' +
                        'I think, size of text should not be too high or too little. Better to find something people ' +
                        'call "golden mean". Anyway, we will see, how it goes.',
                    cardsTitle: 'Offers of the week',
                    offerCardsData: [
                        {id: 0, title: '3000 MMR Boost', text: '35$'},
                        {id: 1, title: 'Low priority', text: '5$'},
                        {id: 2, title: 'Bladeform legacy', text: '25$'},
                        {id: 3, title: '+400 MMR', text: '10$'}
                    ],
                    panelButton: [
                        {id: 0, link: "/categories/hots/low-priority", name: "Low priority"},
                        {id: 1, link: "/categories/hots/leveling", name: "Leveling"},
                        {id: 2, link: "/categories/hots/coaching", name: "Coaching"},
                        {id: 3, link: "/categories/hots/ranked", name: "Ranked"},
                        {id: 4, link: "/categories/hots/play-with-a-pro", name: "Play with a pro"},
                        {id: 5, link: "/categories/hots/achievements", name: "Achievements"},
                        {id: 6, link: "/categories/hots/hots-sub-category", name: "Hots subcategory"}
                    ],
                    breadCrumbs: {linkNames: [], activeLinkName: 'Heroes of the Storm'},
                    canvasCtgData: {
                        placement: 'start', buttonName: 'Offer menu', title: 'Offers'
                    },
                    fullName: 'Heroes of the Storm'
                }
        },
        canvasMenuData: {
            placement: 'end', buttonName: 'Categories', title: 'Categories', canvasButtons: [
                {id: 0, link: "/categories/hots", name: "Heroes of the Storm"},
                {id: 1, link: "/categories/dota2", name: "Dota 2"},
                {id: 2, link: "/categories/lol", name: "League of Legends"}
            ]
        },
    },
    reducers: {

        offerPageAddCard: (state, action) => {
            state.pagesData[action.payload.gameOfferSelector].offerCardsData = [
                ...state.pagesData[action.payload.gameOfferSelector].offerCardsData,
                {
                    id: state.pagesData[action.payload.gameOfferSelector].offerCardsData.length,
                    title: action.payload.title,
                    text: action.payload.text
                }
            ]
        }
    }
})

export const {offerPageAddCard} = offerPageSlice.actions;

export default offerPageSlice.reducer