

let initialState = {
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
}


const notFoundReducer = (state = initialState, action) => {
    return state;
}

export default notFoundReducer