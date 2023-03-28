const todoReducer= (state,action) =>{
    switch (action.type) {
        case 'ADD_TO_LIST':
            return{
                ...state,
                list: action.payload.list,
                lists: action.payload.lists,
                allLists: action.payload.lists,
            }
            case 'DELETE_TO_LIST':
            return{
                ...state,
                lists: action.payload.lists,
                allLists: action.payload.lists,
            }
        case 'ACTIVE_LIST':
            return{
                ...state,
                lists: action.payload,
            }
        case 'COMPLETED_LIST':
            return{
                ...state,
                lists: action.payload,
            }
        case 'ALL_TO_LIST':
            return{
                ...state,
                lists: action.payload,
            }
        case 'COMPLETED':
            return{
                ...state,
                lists: action.payload,
            }
        case 'CLEAR_COMPLETED_LIST':
            return{
                ...state,
                lists: action.payload,
                allLists: action.payload,
            }
        default: return state;
    }
}

export default todoReducer