import {combineReducers} from "redux";
import {pageReducer} from "./pageReducer";
import {userReducer} from "./usersReducer";


export const rootReducer = combineReducers(
    {
        user: userReducer,
        page: pageReducer
    }
)