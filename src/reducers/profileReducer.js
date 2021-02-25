const initialState = {
    profiles: [],
    isLoading: false,
    hasError: false,
    errorMessage: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PROFILE_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_PROFILE_REQUEST_SUCCESS':
            return {
                ...state,
                profiles: state.profiles.concat(action.payload)
            };
        case 'GET_PROFILE_REQUEST_ERROR':
            return {
                ...state,
                hasError: true,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

// export default (state = [], action) => {
//     switch(action.type) {
//         case 'GET_PROFILE':
//             return [...state, action.payload];
//         default:
//             return state;
//     }
// };