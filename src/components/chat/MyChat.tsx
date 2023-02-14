import styled from "styled-components";
import { ChatContainer } from "../../styles/Centering";

type propsType = {
  chat: string;
} 

const MyChat = ({ chat }: propsType) => {
  return (
    <MyChatContainer>
      <div>{chat}</div>
    </MyChatContainer>
  );
};

const MyChatContainer = styled(ChatContainer)`
justify-content: flex-end;
margin-top: 10px;
div {
  display: flex;
  flex-wrap: wrap;
  max-width: 10rem;
  max-height: 20px;
  border-radius: 20px;
  background-color: yellow;
}
`;


export default MyChat;