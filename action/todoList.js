import demoData from '../components/data';

export function loadTodoList() {
    return {
        type: 'LOAD_TODO_LIST',
        payload: demoData
    };
}
export function resetTodoList() {
    return {
        type: 'RESET_TODO_LIST',
        payload: demoData
    };
}
export function selectedData(data) {
    return {
        type: 'SELECT_TODO_LIST',
        payload: data
    };
}
export function addData(data) {
    return {
        type: 'ADD_TODO_LIST',
        payload: data
    };
}
export function searchData(data, str) {
    return {
        type: 'SEARCH_TODO_LIST',
        payload: { data: data, str: str }
    };
}
