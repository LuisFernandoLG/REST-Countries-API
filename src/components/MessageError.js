import styled from "styled-components";

export const MessageError = ({ message }) => {
  return (
    <MessageErrorStyled>
      <span>{message}</span>
      <i className="fas fa-exclamation-circle"></i>
    </MessageErrorStyled>
  );
};

const MessageErrorStyled = styled.p`
  font-size: 1.5rem;
  color: #dc3545;
  font-weight: 800;

  span {
    margin-right: 0.5rem;
  }
`;
