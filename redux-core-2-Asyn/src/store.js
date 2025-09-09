import { applyMiddleware, legacy_createStore as createStore, compose, combineReducers } from "redux";
import {thunk} from "redux-thunk";

import { userReducer } from "./reducer";
import { todoReducer } from "./reducer";

// Root reducer with slices
export const rootReducer = combineReducers({
  users: userReducer, // manages {list, loading, error}
  todos: todoReducer, // manages {list}
});

// Compose with DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Logger Middleware Custom middleware

const log = (store)=>(next)=>(action)=>{
    console.log("Dispatching...",action);
    const result = next(action);
    console.log("Next State",store.getState());
    return result;
}




// Final store
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk,log))
);
