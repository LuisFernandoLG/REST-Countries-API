import { createContext, useState } from "react";

const ThemeContextOwn = createContext();

const initialThemes = {
  dark: {
    iconClasses: "fas fa-moon icon",
    name: "Dark Mode",
    primaryColor: "hsl(207, 26%, 17%)", //(Dark Mode Background)
    secondaryColor: "hsl(209, 23%, 22%)", //(Dark Mode Elements)
    // veryDarkBlueText: "hsl(200, 15%, 8%)", //(Light Mode Text)
    tertiaryColor: "hsl(0, 0%, 100%)", //(Dark Mode Text & Light Mode
  },

  light: {
    iconClasses: "far fa-moon icon",
    name: "Light Mode",
    primaryColor: "#EEEEEE", //(Light Mode Input)
    secondaryColor: "hsl(0, 0%, 100%)", //(Light Mode Background)
    // tertiaryColor: "hsl(0, 0%, 100%)", //(Dark Mode Text & Light Mode
    tertiaryColor: "hsl(200, 15%, 8%)", //(Dark Mode Text & Light Mode
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
