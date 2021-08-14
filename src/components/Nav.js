import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { routes } from "./routes/routes";
import { Wrapper } from "./shareStyleComponents/Wrapper";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav = () => {
  return (
    <NavStyled flex justifyContent="space-between" alignItems="center">
      <Title>
        <NavLink to={routes.HOME_PAGE}>Where in the world?</NavLink>
      </Title>
      <ThemeSwitcher />
    </NavStyled>
  );
};

const Title = styled.h1`
  color: ${({ theme: { tertiaryColor } }) => tertiaryColor};
  font-size: 1.2rem;
  font-weight: 800;

  a {
    color: inherit;
  }
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
