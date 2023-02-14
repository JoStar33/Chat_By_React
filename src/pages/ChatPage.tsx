import styled from "styled-components";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import { Centering } from "../styles/Centering";

const ChatPage = () => {
  return (
    <ChatPageContainer>
      <h1>채팅내역</h1>
      <ChatBox></ChatBox>
      <ChatInput></ChatInput>
    </ChatPageContainer>
  );
};

const ChatPageContainer = styled(Centering)`
width: 100vw;
height: 100vh;
flex-direction: column;
`;


export default ChatPage;