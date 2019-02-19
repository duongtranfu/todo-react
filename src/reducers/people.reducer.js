const peopleReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return [
                ...state,
                { name: action.name, id: action.id }
            ]
        case 'REMOVE_PERSON':
            return state.filter(v => action.id !== v.id);
        default:
            return state;
    }
}

export default peopleReducer;