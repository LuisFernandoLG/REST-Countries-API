import { useContext } from "react";
import styled from "styled-components";
import ThemeContextOwn from "../context/ThemeContextOwn";
import { Wrapper } from "./shareStyleComponents/Wrapper";

export const ThemeSwitcher = () => {
  const { changeTheme, themeName, theme } = useContext(ThemeContextOwn);

  return (
    <ThemeSwitcherStyled flex alignItems="center" gap="1rem">
      <i className={theme.iconClasses} onClick={changeTheme} />
      <h2 className="theme-name">{theme.name}</h2>
    </ThemeSwitcherStyled>
  );
};

const ThemeSwitcherStyled = styled(Wrapper)`
  .icon {
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 2rem;
    /* background: red; */

    &:hover {
      background: ${({ theme: { primaryColor } }) => primaryColor};
    }
  }

  .theme-name {
    font-size: 1rem;
  }
`;
