import {createSlice} from "@reduxjs/toolkit";

const adminPanelSlice = createSlice(
    {
        name: 'adminPanel',
        initialState: {
            linksList: [
                '/', '/dota2', '/lol', '/hots', '/adminPanel'
            ],
            contentSliderEditorRanges: []
        },
        reducers: {
            addContentSliderRange: (state, action) => {
                const newRange = {
                    range: [action.payload.enterStartOfRange, action.payload.enterEndOfRange],
                    addition: action.payload.enterValuePerStep
                };
                state.contentSliderEditorRanges.push(newRange);
            },
            deleteContentSliderRange: (state, action) => {
                const indexToRemove = action.payload;
                // I used
                state.contentSliderEditorRanges = state.contentSliderEditorRanges.filter(
                    (_, index) => index !== indexToRemove
                );
            }
        }
    }
)


export const {addContentSliderRange, deleteContentSliderRange} = adminPanelSlice.actions;
export default adminPanelSlice.reducer