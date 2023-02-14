import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { socket } from '../apis/socketio';
import { Centering } from '../styles/Centering';
import { useRecoilValue } from 'recoil';
import { userInfo } from "../states/atom";
import MyChat from './chat/MyChat';
import OtherChat from './chat/OtherChat';

type chatType = {
  userId: string;
  chat: string
}

const ChatBox = () => {
  const [ chatArr, setChatArr ] = useState<chatType[]>([]);
  const user = useRecoilValue(userInfo);
  useEffect(() => {
    socket.on('msg', (data) => {
      setChatArr([...chatArr, data]);
    });
  });
  return (
    <ChatBoxContainer>
      {
        chatArr.map(chat => chat.userId === user 
          ? <MyChat key={chat.userId + chatArr.length * 2} chat={chat.chat}></MyChat> 
          : <OtherChat chat={chat.chat} userId={chat.userId}></OtherChat>)
      }
    </ChatBoxContainer>
  );
};

const ChatBoxContainer = styled.div`
display: flex;
flex-direction: column;
width: 800px;
height: 80vh;
border-radius: 20px;
border: 2px solid black;
`;

export default ChatBox;