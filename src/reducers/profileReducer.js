const initialState = {
    profiles: [],
    isLoading: false,
    hasError: false,
    errorMessage: null
}

/*
* GET_PROFILE_REQUEST
* GET_PROFILE_REQUEST_SUCCESS
* GET_PROFILE_REQUEST_ERROR
* */

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PROFILE_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_PROFILE_REQUEST_SUCCESS': {
            return {
                ...initialState,
                profiles: state.profiles.concat(action.payload),
            }
        }

        case 'GET_PROFILE_REQUEST_ERROR': {
            return {
                ...state,
                hasError: true,
                errorMessage: action.payload
            }
        }

        default:
            return state;
    }
};
