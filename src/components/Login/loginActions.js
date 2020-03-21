const Types = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
}

const logUserIn = (user) => ({
    type: Types.LOGIN_USER,
    payload: user
});

const logOutUser = () => ({
    type: Types.LOGOUT_USER,
})

export default {
    logUserIn,
    logOutUser,
    Types,
}