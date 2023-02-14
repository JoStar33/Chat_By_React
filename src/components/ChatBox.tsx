import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { socket } from '../apis/socketio';
import { Centering } from '../styles/Centering';
import MyChat from './chat/MyChat';
import OtherChat from './chat/OtherChat';

type chatType = {
  userId: string;
  chat: string
}

const ChatBox = () => {
  const [ chatArr, setChatArr ] = useState<chatType[]>([]);
  useEffect(() => {
    socket.on('msg', (data: chatType) => {
      chatArr.push(data);
      setChatArr(chatArr)
    });
  }, []);
  return (
    <ChatBoxContainer>
      {
        chatArr.map(chat => chat.userId === )
      }
    </ChatBoxContainer>
  );
};

const ChatBoxContainer = styled(Centering)`
width: 800px;
height: 80vh;
border-radius: 20px;
border: 2px solid black;
`;

export default ChatBox;