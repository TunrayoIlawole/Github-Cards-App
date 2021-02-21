import github from '../apis/github';

export const getProfile = (username) => {
    return async(dispatch) => {
        dispatch({ type: 'GET_PROFILE_REQUEST' });

        try{
            const response = await github.get(`/users/${username}`);

            dispatch({type: 'GET_PROFILE_REQUEST_SUCCESS', payload: response.data})
        }catch (e){
            dispatch({type: 'GET_PROFILE_REQUEST_ERROR', payload: e.message })
        }

    };
};
