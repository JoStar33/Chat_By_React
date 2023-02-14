import React, { useRef } from 'react';
import styled from 'styled-components';
import { socket } from '../apis/socketio';

const ChatInput = () => {
  const chatRef = useRef<HTMLInputElement>(null);
  const handleOnClick = () => {
    if(chatRef.current) {
      socket.emit('msg', chatRef.current.value);
    }
  }
  return (
    <ChatInputContainer>
      <input ref={chatRef}></input>
      <button onClick={handleOnClick}>채팅입력</button>
    </ChatInputContainer>
  );
};
const ChatInputContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
input {
  width: 700px;
  border-radius: 20px;
};
button {
  width: 100px; 
  height: 40px;
}
`;

export default ChatInput;