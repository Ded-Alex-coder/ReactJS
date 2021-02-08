import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import chatReducer from './chatReducer';
import messageMiddleware from './messageMiddleware';
import chatMiddleware from './chatMiddleware';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import ReduxThunk from 'redux-thunk'

export const history = createBrowserHistory();

const reducer = combineReducers({
    chats: chatReducer,
    router: connectRouter(history),
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export function initStore (preloadedState = undefined) {
    return createStore(
        reducer,
        preloadedState,
        composeEnhancers(applyMiddleware(
            ReduxThunk,
            routerMiddleware(history),
            messageMiddleware,
            chatMiddleware
        ))
    )
}