const UsersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload, loading: false }
        case 'LOADING':
            return { ...state, loading: true }
        case 'ERROR':
            return { ...state, error: action.payload, loading: false }
        case 'SET_AS_VOLUNTEER':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user._id === action.payload) {
                        return { ...user, type: 'volunteer' }
                    }
                    return user
                }),
                loading: false
            }
        default:
            return state
    }
}

export default UsersReducer