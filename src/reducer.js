const SET_USER = "SET_USER"

export const initialState = {
    user: null
}

export const setUser = (user) => ({type: SET_USER, user})

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, user: action.user}
        default:
            return state
    }
}

export default reducer