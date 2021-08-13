import styled from "styled-components";

export const Wrapper = styled.div`
  display: ${({ flex }) => flex && "flex"};
  flex-direction: ${({ directionColumn }) => directionColumn && "column"};
  flex-wrap: ${({ wrap }) => wrap && "wrap"};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};

  padding: ${({ pd }) => pd};
  margin: ${({ mg }) => mg};
`;
