import { handleActions } from 'redux-actions';
import {
  loadingChats,
  errorLoading,
  initChats,
  sendMessage,
  addChat,
  fire,
  unfire,
} from './chatActions';

const initialState = {
  chats: {},
  isLoading: false,
  error: null,
};

export default handleActions(
  {
    [errorLoading]: (store, action) => {
      return {
        ...store,
        isLoading: false,
        error: action.payload.error,
      };
    },
    [loadingChats]: (store, action) => {
      return {
        ...store,
        isLoading: true,
      };
    },
    [initChats]: (store, action) => {
      return {
        ...store,
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
            fire: false,
            messages: [],
          },
        },
      };
    },
    [fire]: (store, action) => {
      const { id } = action.payload;
      return {
        ...store,
        chats: {
          ...store.chats,
          [id]: {
            ...store.chats[id],
            fire: true,
          },
        },
      };
    },
    [unfire]: (store, action) => {
      const { id } = action.payload;
      return {
        ...store,
        chats: {
          ...store.chats,
          [id]: {
            ...store.chats[id],
            fire: false,
          },
        },
      };
    },
  },
  initialState
);
