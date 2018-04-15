import { Platform } from 'react-native';

const renderWeb = Platform.select({
    web: true
});
export default function todoList(state = {}, action) {
    switch (action.type) {
        case "LOAD_TODO_LIST": {
            const tempState = { ...state };
            tempState.data = action.payload;
            return tempState;
        }
        case "SELECT_TODO_LIST": {
            const tempState = { ...state };
            tempState.data = action.payload;
            renderWeb && sessionStorage.setItem('todos', JSON.stringify(tempState.data || []));
            return tempState;
        }
        case "ADD_TODO_LIST": {
            const tempState = { ...state };
            tempState.data = action.payload;
            console.log(tempState);
            renderWeb && sessionStorage.setItem('todos', JSON.stringify(tempState.data || []));
            return tempState;
        }
        case "SEARCH_TODO_LIST": {
            debugger;
            const tempState = { ...state };
            tempState.data = action.payload.data.filter(item => {
                const itemSearch = item.firstName ? item.firstName.toLowerCase() : '';
                if (
                    itemSearch.indexOf(action.payload.str) !== -1
                ) {
                    return item;
                }
            });

            return tempState;
        }
        default:
            return Object.assign({}, state);
    }
}
