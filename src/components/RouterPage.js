import { useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeContextOwn from "../context/ThemeContextOwn";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Nav } from "./Nav";
import { CountryPage } from "./routes/CountryPage";
import { HomePage } from "./routes/HomePage";
import { routes } from "./routes/routes";

const RouterPage = () => {
  const { theme } = useContext(ThemeContextOwn);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Nav />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route
            path={`${routes.COUNTRY_PAGE}/:code`}
            component={CountryPage}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default RouterPage;
