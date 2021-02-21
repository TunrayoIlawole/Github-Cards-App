export default (state = [], action) => {
    switch(action.type) {
        case 'GET_PROFILE':
            return [...state, action.payload];
        default:
            return state;
    }
};