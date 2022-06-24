import React from 'react';
import PropTypes from 'prop-types';
import './messageHistory.css';

const MessageHistory = ({ message }) => {
  if (!message) return null;
  return message.map((row, index) => (
    <div key={index} className='message-history'>
      <div className='send'>
        <div className='sender'>{row.messageBy}</div>
        <div className='date'>{row.date}</div>
      </div>
      <div className='message'>{row.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  message: PropTypes.array.isRequired,
};
export default MessageHistory;
