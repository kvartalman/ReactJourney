import {createSlice} from "@reduxjs/toolkit";

const adminPanelSubCtgEditorSlice = createSlice({
    name: 'adminPanelSubCtgEditor',
    initialState: {
        subCtgEditorData: []
    },
    reducers: {
        fillSubCtgEditorData: (state, action) => {

            let newData = [];

            for (let i = 0; i < action.payload.length; i++) {
                newData.push({
                    old: action.payload[i].name,
                    new: ''
                })
            }

            state.subCtgEditorData = newData;
        },
        editSubCtgEditorData: (state, action) => {

            const actionType = {
                add: () => {

                },
                edit: () => {
                    for (let i = 0; i < state.subCtgEditorData.length; i++) {
                        if (state.subCtgEditorData[i].old === action.payload.name) {
                            state.subCtgEditorData.splice(i, 1, {
                                old: action.payload.name,
                                new: action.payload.text
                            })
                        }
                    }
                },
                delete: () => {

                }
            }

            actionType[action.payload.type]();

        }
    }
});

export const {
    fillSubCtgEditorData,
    editSubCtgEditorData,
} = adminPanelSubCtgEditorSlice.actions;

export default adminPanelSubCtgEditorSlice.reducer;