import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import authReducer from './Reducers/authReducer';
import errorReducer from './Reducers/errorReducer';
import dataReducer from './Reducers/dataReducer';
import thunk from 'redux-thunk';


const combinedReducer = combineReducers({
    authReducer,
    errorReducer,
    dataReducer
})

const store = createStore(combinedReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;