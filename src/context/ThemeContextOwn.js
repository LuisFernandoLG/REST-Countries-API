import { createContext, useState } from "react";

const ThemeContextOwn = createContext();

const initialThemes = {
  dark: {
    iconClasses: "fas fa-moon icon",
    name: "Dark Mode",
    primaryColor: "hsl(207, 26%, 17%)",
    secondaryColor: "hsl(209, 23%, 22%)",
    tertiaryColor: "hsl(0, 0%, 100%)",
    boxShadowColor: "#27272702",
  },

  light: {
    iconClasses: "far fa-moon icon",
    name: "Light Mode",
    primaryColor: "#fafafa",
    secondaryColor: "hsl(0, 0%, 100%)",
    tertiaryColor: "hsl(200, 15%, 8%)",
    boxShadowColor: "#2727270A",
  },
};

const initialThemeName = "dark";

const ThemeProviderOwn = ({ children }) => {
  const [theme, setTheme] = useState(initialThemes["dark"]);
  const [themeName, setThemeName] = useState(initialThemeName);

  const changeTheme = () => {
    if (themeName === "light") {
      setTheme(initialThemes["dark"]);
      setThemeName("dark");
    } else {
      setTheme(initialThemes["light"]);
      setThemeName("light");
    }
  };

  const data = {
    theme,
    changeTheme,
    themeName,
  };

  return (
    <ThemeContextOwn.Provider value={data}>{children}</ThemeContextOwn.Provider>
  );
};

export { ThemeProviderOwn };
export default ThemeContextOwn;
