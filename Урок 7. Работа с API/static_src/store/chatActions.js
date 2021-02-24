import { createActions } from 'redux-actions';

export const {
  loadingChats,
  errorLoading,
  initChats,
  sendMessage,
  addChat,
  fire,
  unfire,
} = createActions({
  LOADING_CHATS: () => ({}),
  ERROR_LOADING: (error) => ({ error }),
  INIT_CHATS: (chats) => ({ chats }),
  SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
  ADD_CHAT: (id, name) => ({ id, name }),
  CHANGE_CHAT: (id) => ({ id }),
  FIRE: (id) => ({ id }),
  UNFIRE: (id) => ({ id }),
});
