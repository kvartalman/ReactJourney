import {createSlice} from "@reduxjs/toolkit";

const adminPanelNewGameSlice = createSlice({
    name: 'adminPanelNewGame',
    initialState: {
        newGameSubCategories: []
    },
    reducers: {
        editNewSubCategories: (state, action) => {

            const actionType = {
                add: (actionData) => {
                    state.newGameSubCategories.push(
                        {
                            name: actionData.name,
                            products: []
                        }
                    )
                },
                delete: (actionData) => {
                    state.newGameSubCategories.pop();
                }
            }

            actionType[action.payload.type](action.payload);
        }
    }
})

export const {
    editNewSubCategories
} = adminPanelNewGameSlice.actions;

export default adminPanelNewGameSlice.reducer;