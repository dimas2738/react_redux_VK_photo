import {useDispatch, useSelector} from "react-redux";
import {handleLoginAction, setUserAction} from "../../redux/actions/userActions";
import {User} from "../User";

export function UserContainer() {
    let user = useSelector(state => state.user);
    let dispatch = useDispatch()
    let setUser = (user) => {
        dispatch(setUserAction(user))
    }
    let handleLogin = () => {
        dispatch(handleLoginAction())
    }

    return <User setUser = {setUser}
                 name = {user.name}
                 error={user.error}
                 handleLogin={handleLogin}/>

}

