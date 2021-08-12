import RouterPage from "./components/RouterPage";
import "normalize.css";
import { ThemeProviderOwn } from "./context/ThemeContextOwn";

function App() {
  return (
    <ThemeProviderOwn>
      <RouterPage />
    </ThemeProviderOwn>
  );
}

export default App;
