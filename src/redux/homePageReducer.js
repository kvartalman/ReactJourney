const homePageAddCard = 'HOMEPAGE-ADD-CARD';
const homePageAddButton = 'HOMEPAGE-ADD-BUTTON';
const homePageCardsReducer = (state, action) => {

    switch(action.type) {

        case homePageAddCard:
            let newCard = {
                id: state[0].length,
                tagId: state[1].cardIdForm,
                title: state[1].cardTitleForm,
                text: state[1].cardTextForm,
                button: [],
                bg: './offerbackgrounds/HomepageOfferCards/dota2.jpg'
            };
            state[0].push(newCard);
            state[1].cardIdForm = '';
            state[1].cardTitleForm = '';
            state[1].cardTextForm = '';
            break

        case homePageAddButton:
            let findId = (cardTitle) => {
                for (let i = 0; i < state[0].length; i++) {
                    if (state[0][i].title === cardTitle) {
                        return (i)
                    }
                }
            };

            let newButton = {
                id: state[0][findId(action.cardTitle)].button.length,
                link: action.link,
                type: action.btnType,
                class: action.btnType === 'mainButton' ? 'card-main-button' : 'order-button',
                name: state[1].buttonNameForm
            };
            state[0][findId(action.cardTitle)].button.push(newButton);
            state[1].buttonNameForm = '';
            break

        default:
            return state;
    }

    return state;
}

export const homePageCardsActionCreator = () =>
    ({
        type: homePageAddCard,
    })
export const homePageButtonsActionCreator = (cardTitle, link, btnType) =>
    ({
        type: homePageAddButton,
        cardTitle: cardTitle,
        link: link,
        btnType: btnType
    })

export default homePageCardsReducer
