import { createActions } from 'redux-actions';

export const {
  loadingChats,
  initChats,
  sendMessage,
  addChat,
  fire,
  unfire,
} = createActions({
  LOADING_CHATS: () => ({}),
  INIT_CHATS: (chats) => ({ chats }),
  SEND_MESSAGE: (id, name, content) => ({ id, name, content }),
  ADD_CHAT: (id, name) => ({ id, name }),
  CHANGE_CHAT: (id) => ({ id }),
  FIRE: (id) => ({ id }),
  UNFIRE: (id) => ({ id }),
});
