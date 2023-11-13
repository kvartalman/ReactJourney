import {createSlice} from '@reduxjs/toolkit';

const adminPanelNewContentSlice = createSlice({
    name: 'adminPanelNewContent',
    initialState: {
        homePageOfferCards: []
    },
    reducers: {
        addHomePageOfferCardsData: (state, action) => {
            state.homePageOfferCards = action.payload;
        },
        addHomePageOfferCardsButton: (state, action) => {

        }
    }

})

export const {addHomePageOfferCardsData} = adminPanelNewContentSlice.actions;
export default adminPanelNewContentSlice.reducer;