import {createSlice} from '@reduxjs/toolkit';

const adminPanelNewContentSlice = createSlice({
    name: 'adminPanelNewContent',
    initialState: {
        homePageOfferCards: [],
        addedCardsCounter: 0
    },
    reducers: {
        addHomePageOfferCardsData: (state, action) => {
            state.homePageOfferCards = action.payload;
        },
        addHomePageOfferCardsButton: (state, action) => {
            for (let i = 0; i < state.homePageOfferCards.length; i++) {

                if (state.homePageOfferCards[i].tagId === action.payload.activeCard) {

                    state.homePageOfferCards[i].button[state.homePageOfferCards[i].button.length] = {
                        id: state.homePageOfferCards[i].button.length,
                        link: action.payload.link,
                        type: action.payload.type,
                        class: action.payload.class,
                        name: action.payload.name
                    }
                    state.addedCardsCounter += 1;
                }
            }
        },
        cancelHomePageOfferCardsButtonAdding: (state, action) => {
            for (let i = 0; i < state.homePageOfferCards.length; i++) {

                if (state.homePageOfferCards[i].tagId === action.payload.activeCard && state.addedCardsCounter !== 0) {
                        state.homePageOfferCards[i].button.pop()
                        state.addedCardsCounter -= 1
                }
            }
        }
    }

})

export const {
    addHomePageOfferCardsData,
    addHomePageOfferCardsButton,
    cancelHomePageOfferCardsButtonAdding
} = adminPanelNewContentSlice.actions;
export default adminPanelNewContentSlice.reducer;