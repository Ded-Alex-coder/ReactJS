import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatList } from '../../components/ChatList/ChatList';
import { createChat } from '../../store/chatOperations';

const mapStateToProps = (store) => {
  const chats = Object.entries(store.chats.chats).map(([id, { name }]) => ({
    id,
    name,
  }));
  return {
    isLoading: store.chats.isLoading,
    chats,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createChat,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
