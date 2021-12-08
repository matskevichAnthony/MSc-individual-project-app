import userData from "../data/userData";

const userReducer = (state = userData(), action) => {
    switch (action.type) {
        case 'GET_USER_INFO':
            return state;
        case 'USER_LOG_IN':
            return [...state, action.payload];
        case 'USER_ATTEND_EVENT':
            return { ...state, eventsAttend: [...state.eventsAttend, action.payload] };
        case 'USER_ADD_EVENT':
            return { ...state, eventsManage: [...state.eventsManage, action.payload] };
        default:
            return state;
    }
}

export default userReducer;