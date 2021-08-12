import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <NavStyled flex justifyContent="space-between">
      <Title>Where in the world?</Title>
      <ThemeSwitcher />
    </NavStyled>
  );
};

const Title = styled.h2``;

const NavStyled = styled(Wrapper)`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};

  position: sticky;
  top: 0;

  padding: 0 3rem;
`;
