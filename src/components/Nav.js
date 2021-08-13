import styled from "styled-components";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <NavStyled flex justifyContent="space-between" alignItems="center">
      <Title href="/">Where in the world?</Title>
      <ThemeSwitcher />
    </NavStyled>
  );
};

const Title = styled.a`
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  font-size: 1.2rem;
  font-weight: 800;
`;

const NavStyled = styled(Wrapper)`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  box-shadow: 2px 0 0.625rem
    ${({ theme: { boxShadowColor } }) => boxShadowColor};

  position: sticky;
  top: 0;

  padding: 1rem 3rem;
`;
