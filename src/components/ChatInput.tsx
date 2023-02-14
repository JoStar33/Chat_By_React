import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { socket } from '../apis/socketio';
import { userInfo } from '../states/atom';

const ChatInput = () => {
  const chatRef = useRef<HTMLInputElement>(null);
  const user = useRecoilValue(userInfo);
  const handleOnClick = () => {
    if(chatRef.current) {
      socket.emit('msg', {
        userId: user,
        chat: chatRef.current.value
      });
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