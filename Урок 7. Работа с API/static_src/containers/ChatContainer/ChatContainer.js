import React, { Component } from 'react';
import { Chat } from '../../components/Chat/Chat';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/chatActions';

export const ROBOT = 'Robot';

const mapStateToProps = (store, props) => {
  const { id } = props.match.params;
  const chats = id && store.chats.chats ? store.chats.chats : {};

  return {
    isLoading: store.chats.isLoading,
    messages: chats[id] ? chats[id].messages : undefined,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      sendMessage,
    },
    dispatch
  );

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = ownProps.match.params;

  const onSendMessage = ({ name, content }) => {
    dispatchProps.sendMessage(id, name, content);
  };

  return {
    isLoading: stateProps.isLoading,
    messages: stateProps.messages,
    onSendMessage,
  };
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
