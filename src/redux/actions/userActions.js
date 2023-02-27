import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SET_USER} from "./actionTypes";

export function setUserAction(user){
    return{
        type: SET_USER,
        payload: user,
    }
}

export function handleLoginAction() {
    return function(dispatch) {
        dispatch({
            type: LOGIN_REQUEST,
        })

        //eslint-disable-next-line no-undef
        VK.Auth.login(r => {
            if (r.session) {
                let username = r.session.user.first_name

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: username,
                })
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    error: true,
                    payload: new Error('Ошибка авторизации'),
                })
            }
        }, 4) // запрос прав на доступ к photo
    }

}
