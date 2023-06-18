import {createSlice} from "@reduxjs/toolkit";

const notFoundSlice = createSlice(
    {
        name: 'notFound',
        initialState: {
            links: [
                {
                    id: 0,
                    spanClass: 'notFoundLinksSpans',
                    to: '/',
                    linkClass: 'notFoundLinks',
                    text: 'Back to Main Page'
                },
                {
                    id: 1,
                    spanClass: 'notFoundLinksSpans',
                    to: 'categories',
                    linkClass: 'notFoundLinks',
                    text: 'See Categories'
                }
            ]
        },
        reducers: {}
    }
)

export default notFoundSlice.reducer