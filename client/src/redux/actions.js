export const LOGGED_IN = 'LOGIN';
export const LOGGED_OUT = 'LOGOUT';

const createPostRequest = options => {
    let parsedOptions = null;
    try {
        parsedOptions = JSON.stringify(options);
    } catch (err) {
        console.error('Cannot parse ', options);
        console.error('Error message: ', err);
    }
    return {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: parsedOptions
    };
};

const handleFetchErrors = response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};
const loggedIn = (payload) => ({type: LOGGED_IN, payload});

export const login = (payload) => {
    const {username, password} = payload;
    console.warn('username', username);
    return dispatch => fetch('auth/login', createPostRequest({username, password}))
    //TODO currently this code will not work at all, because server redirects after successful login
        .then(handleFetchErrors)
        .then(response => {
            const loginInfo = response.json();
            console.warn('loginInfo from app', loginInfo);
            dispatch(loggedIn(loginInfo));
        })
        .catch(err => console.warn(err))
};
export const logout = () => ({type: LOGGED_OUT});