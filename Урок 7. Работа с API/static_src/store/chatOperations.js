import { loadingChats, errorLoading, initChats, addChat } from './chatActions';

export const fetchChats = () => async (dispatch) => {
  dispatch(loadingChats());
  try {
    const res = await fetch('/api/chats.json');
    if (res.status !== 200) {
      throw new Error('Error with status' + res.status);
    }
    const data = await res.json();
    dispatch(initChats(data));
  } catch (e) {
    dispatch(errorLoading(e.message));
  }
};

export const createChat = (name) => (dispatch, getState) => {
  const id = Date.now();
  dispatch(addChat(id, name));
};
