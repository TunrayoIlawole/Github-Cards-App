import github from '../apis/github';

export const getProfile = (username) => {
    return async(dispatch) => {
        const response = await github.get(`/users/${username}`);

        dispatch({ type: 'GET_PROFILE', payload: response.data });
    };
};