import { Centering } from '../styles/Centering';
import styled from 'styled-components';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const InitForm = () => {
  const nickRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSetNickName = () => {
    if(nickRef.current) {
      navigate("/chat");
    }
  }
  return (
    <InitFormContainer>
      <InputBox>
        <p>닉네임 입력: </p>
        <InputNickName ref={nickRef} type="text" />
      </InputBox>
      <AcceptButton onClick={handleSetNickName}>접속</AcceptButton>
    </InitFormContainer>
  );
};

const InitFormContainer = styled(Centering)`
flex-direction: column;
width: 40rem;
height: 20rem;
box-shadow: 0 6px 6px 0 #808080;
border-radius: 20px;
`;

const InputBox = styled(Centering)`
display: flex;
flex-direction: row;  
p {
  font-size: 20px;
  font-weight: 800;
}
`;

const InputNickName = styled.input`
height: 2rem;
margin: 1rem;
border-radius: 20px;
`;

const AcceptButton = styled.button`
width: 10rem;
height: 4rem;
font-size: 30px;
font-weight: 800;
background-color: skyblue;
border: 0px;
border-radius: 20px;
box-shadow: 0 6px 6px 0 #808080;
cursor: pointer;
`;

export default InitForm;