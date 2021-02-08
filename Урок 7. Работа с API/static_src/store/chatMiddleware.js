import {createChat, addChat, sendMessage, changeChat, fire, unfire} from './chatActions';
import {push, LOCATION_CHANGE} from 'connected-react-router';

export default store => next => action => {
    next(action);
    if(action.type === addChat.toString()){
        store.dispatch(push('/chats/' + action.payload.id));
    }else if(action.type === sendMessage.toString()){
        const currentChat = store.getState().router.location.pathname.split('/')[2];
        if(currentChat !== action.payload.id) {
            store.dispatch(fire(action.payload.id));
        }
    }else if(action.type === LOCATION_CHANGE) {
        const currentChat = store.getState().router.location.pathname.split('/')[2];
        store.dispatch(unfire(currentChat));
    }
}