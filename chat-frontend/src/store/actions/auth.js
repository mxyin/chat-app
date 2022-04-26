import AuthService from "../../services/authService"

export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const LOGOUT = "LOGOUT"

// login function with dispatch action is being called inside Login component
export const login = function (params, navigate){
    return function (dispatch){
        return AuthService.login(params)
        .then(data => {
            // dispatch the action of type login with the payload attached
            // store will assign the action to the appropriate reducer to update the state
            console.log(data)
            dispatch({type: LOGIN, payload:data})
            // after authenticating the user, and dispatched the action to update the state,
            // navigate to the root route which is the chat screen
            navigate("/")
        })
        .catch(err => {})
    }
}

export const register = function (params, navigate){
    return function (dispatch){
        return AuthService.register(params)
        .then(data => {
            dispatch({type: REGISTER, payload:data})
            navigate("/")
        })
        .catch(err => {})
    }
}

export const logout = function (){
    return function (dispatch){
        AuthService.logout()
        dispatch({type: LOGOUT})
    }
}
