import { ChatContainer } from "../../styles/Centering";
import styled from "styled-components";

type chatType = {
  userId: string;
  chat: string
}

const OtherChat = ({userId, chat}: chatType) => {
  return (
    <OtherChatContainer>
      <h3>{userId}</h3>
      <div>{chat}</div>
    </OtherChatContainer>
  );
};

const OtherChatContainer = styled(ChatContainer)`
justify-content: flex-start;
flex-direction: column;
div {
  max-width: 10rem;
  border-radius: 20px;
  background-color: yellow;
}
`;


export default OtherChat;