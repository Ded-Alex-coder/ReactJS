import { handleActions } from 'redux-actions';
import { loadingChats, initChats, sendMessage, addChat } from './chatActions';

const initialState = {
  chats: {},
  isLoading: false,
};

export default handleActions(
  {
    [loadingChats]: (store, action) => {
      return {
        ...store,
        isLoading: true,
      };
    },
    [initChats]: (store, action) => {
      return {
        isLoading: false,
        chats: action.payload.chats,
      };
    },
    [sendMessage]: (store, action) => {
      const { id, name, content } = action.payload;
      return {
        ...store,
        chats: {
          ...store.chats,
          [id]: {
            ...store.chats[id],
            messages: [...store.chats[id].messages, { name, content }],
          },
        },
      };
    },
    [addChat]: (store, action) => {
      const { id, name } = action.payload;

      return {
        ...store,
        chats: {
          ...store.chats,
          [id]: {
            name,
            messages: [],
          },
        },
      };
    },
  },
  initialState
);
