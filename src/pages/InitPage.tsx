import styled from "styled-components";
import InitForm from "../components/InitForm";
import { Centering } from "../styles/Centering";

const InitPage = () => {
  return (
    <InitPageContainer>
      <h1>환영합니다. 닉네임 설정 후 접속해주세요!</h1>
      <InitForm></InitForm>
    </InitPageContainer>
  );
};

const InitPageContainer = styled(Centering)`
width: 100vw;
height: 100vh;
flex-direction: column;
`;

export default InitPage;