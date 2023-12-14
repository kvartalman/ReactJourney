import {createSlice} from '@reduxjs/toolkit';

const adminPanelNewProductSlice = createSlice(
    {
        name: 'adminPanelNewProduct',
        initialState: {
            contentSliderSettingsRanges: [],
            contentSliderEditorRanges: [],
            newCheckboxesArray: []
        },
        reducers: {
            addContentSliderRange: (state, action) => {
                const newRange = {
                    range: [action.payload.enterStartOfRange, action.payload.enterEndOfRange],
                    value: action.payload.enterValuePerStep
                };
                // If we create new Content Slider, we use 'settings' type.
                // If we want to edit current Content Slider, we use 'editor' type.
                action.payload.type === 'settings' ?
                    state.contentSliderSettingsRanges.push(newRange)
                    :
                    state.contentSliderEditorRanges.push(newRange)
            },
            deleteContentSliderRange: (state, action) => {
                const indexToRemove = action.payload.index;
                // I tried to use filter instead of splice to prevent auto-F5 when i delete any elem of array except last,
                // but it doesn't work
                action.payload.type === 'settings' ?
                    state.contentSliderSettingsRanges = state.contentSliderSettingsRanges.filter(
                        (_, index) => index !== indexToRemove)
                    :
                    state.contentSliderEditorRanges = state.contentSliderEditorRanges.filter(
                        (_, index) => index !== indexToRemove)
            },
            handleNewCheckboxesArrayChanges: (state, action) => {

            }
        }
    }
)

export const {
    addContentSliderRange,
    deleteContentSliderRange,
    handleNewCheckboxesArrayChanges
} = adminPanelNewProductSlice.actions;
export default adminPanelNewProductSlice.reducer;