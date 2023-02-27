import {rootReducer} from "./reducers/indexReducer";
import {applyMiddleware} from "redux";
import logger from 'redux-logger'
// import {ping} from "../middleware/ping";
import thunk from 'redux-thunk'

const {createStore} = require("redux");


export const store = createStore(rootReducer, applyMiddleware(thunk, logger))