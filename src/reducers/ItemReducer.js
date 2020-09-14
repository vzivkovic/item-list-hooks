import uuid from 'uuid/v1';

export const ItemReducer = (state, action) => {
    switch (action.type()){

        case 'ADD_ITEM':
            return [
                ...state,
                {
                    title: action.book.title,
                    author: action.book.author,
                    id: uuid.id
                }
            ];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id);

        default:
            return state;
    }
}
