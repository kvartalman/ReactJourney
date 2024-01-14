import {createSlice} from "@reduxjs/toolkit";

const adminPanelSubCtgEditorSlice = createSlice({
    name: 'adminPanelSubCtgEditor',
    initialState: {
        subCtgEditorData: [],
        subCtgEditorAddedSubCtgData: [],
        subCtgEditorDeletedSubCtgData: []
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
                add: (actionData) => {
                    state.subCtgEditorData.push(
                        {
                            old: action.payload.name,
                            new: ''
                        }
                    );
                    state.subCtgEditorAddedSubCtgData.push(
                        {
                            old: action.payload.name,
                            new: ''
                        }
                    );
                },
                edit: (actionData) => {
                    for (let i = 0; i < state.subCtgEditorData.length; i++) {
                        if (state.subCtgEditorData[i].old === actionData.name) {
                            state.subCtgEditorData.splice(i, 1, {
                                old: actionData.name,
                                new: actionData.text
                            })
                            break;
                        }
                    }
                },
                delete: (actionData) => {

                    let removedSubCtg;

                    for (let i = 0; i < state.subCtgEditorData.length; i++) {
                        if (state.subCtgEditorData[i].old === actionData.name) {
                            removedSubCtg = {
                                name: actionData.name,
                                index: i
                            }
                            break;
                        }
                    }
                    state.subCtgEditorData = state.subCtgEditorData.filter(subCtg => subCtg.old !== actionData.name);
                    state.subCtgEditorDeletedSubCtgData.push(removedSubCtg);
                },
                cancel: (actionData) => {
                    const removedSubCtg = state.subCtgEditorDeletedSubCtgData.pop();

                    state.subCtgEditorData.splice(removedSubCtg.index, 0, {old: removedSubCtg.name, new: ''});
                },
                deleteAdded: (actionData) => {
                    if (state.subCtgEditorAddedSubCtgData.length > 0) {
                        state.subCtgEditorData.pop();
                        state.subCtgEditorAddedSubCtgData.pop();
                    }
                }
            }

            actionType[action.payload.type](action.payload);

        }
    }
});

export const {
    fillSubCtgEditorData,
    editSubCtgEditorData,
} = adminPanelSubCtgEditorSlice.actions;

export default adminPanelSubCtgEditorSlice.reducer;